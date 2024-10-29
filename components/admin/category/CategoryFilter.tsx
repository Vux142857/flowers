'use client';

import { useCallback, useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { QueryAction, Schemas, StatusType } from "@/lib/admin/constants";
import { useRouter } from "next/navigation";
import Search from "../common/Search";

interface CategoryFilterProps {
  counts: {
    all: number
    active: number
    inactive: number
  }
}

export interface ICategoryFilter {
  status: string
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ counts }) => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [query,] = useState<ICategoryFilter>({
    status: "",
  })

  const handleStatusChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  }, [])

  const handleSearch = useCallback(() => {
    router.push(`/admin/${Schemas.CATEGORY}?action=${QueryAction.SEARCH}&query=${name}`)
  }, [name, router])

  const handleFilter = useCallback(() => {
    router.push(`/admin/${Schemas.CATEGORY}?action=${QueryAction.FILTER}&status=${status}`)
  }, [router, status])

  useEffect(() => {
    query.status = status;
  }, [status, query])

  return (
    <div className="flex flex-col border-2 p-4 rounded gap-4">
      <h2 className="text-xl font-bold">Filter</h2>
      <div className="flex flex-row gap-4">
        <Button size={"lg"} >All ({counts?.all || 0})</Button>
        <Button size={"lg"} className="bg-green-500" >Active ({counts.active || 0})</Button>
        <Button size={"lg"} className="bg-red-500">Inactive ({counts.inactive || 0})</Button>
      </div>
      <div className="flex gap-4 mb-4">
        <Search query={name} setQuery={setName} handleSearch={handleSearch} />
        <select
          value={status}
          onChange={handleStatusChange}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Status of category</option>
          {
            StatusType && Object.values(StatusType).map((status, index) => (
              <option key={index} value={status}>{status}</option>
            ))
          }
        </select>
        <button onClick={handleFilter} className="p-2 bg-blue-500 text-white rounded-md">
          Filter
        </button>
      </div>
    </div>
  );
}

export default CategoryFilter;