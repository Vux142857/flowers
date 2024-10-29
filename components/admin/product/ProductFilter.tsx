'use client';

import { useCallback, useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { QueryAction, Schemas, StatusType } from "@/lib/admin/constants";
import { useRouter } from "next/navigation";
import { ICategory } from "@/services/admin/category.service";
import Search from "../common/Search";

interface ProductFilterProps {
  counts: {
    all: number
    active: number
    inactive: number
  }
  categories: ICategory[]
}

export interface IProductFilter {
  status: string
  category: string
}

// Component handles search and filter of the product
const ProductFilter: React.FC<ProductFilterProps> = ({ counts, categories }) => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [query,] = useState<IProductFilter>({
    status: "",
    category: ""
  })

  const handleStatusChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  }, [])

  const handleCategoryChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  }, [])

  const handleSearch = useCallback(() => {
    router.push(`/admin/${Schemas.PRODUCT}?action=${QueryAction.SEARCH}&query=${name}`)
  }, [name, router])

  const handleFilter = useCallback(() => {
    router.push(`/admin/${Schemas.PRODUCT}?action=${QueryAction.FILTER}&status=${status}&category=${category}`)
  }, [category, router, status])

  useEffect(() => {
    query.status = status;
    query.category = category;
  }, [status, category, query])

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
          <option value="">Status of product</option>
          {
            StatusType && Object.values(StatusType).map((status, index) => (
              <option key={index} value={status}>{status}</option>
            ))
          }
        </select>
        {categories.length > 0 && <select
          value={category}
          onChange={handleCategoryChange}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Category of product</option>
          {categories.map((item: ICategory, index: number) => (
            <option key={index} value={item.id}>{item.name}</option>
          ))}
        </select>}
        <button onClick={handleFilter} className="p-2 bg-blue-500 text-white rounded-md">
          Filter
        </button>
      </div>
    </div>
  );
}

export default ProductFilter;