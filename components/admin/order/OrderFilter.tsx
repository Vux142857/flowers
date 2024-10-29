'use client';

import { useCallback, useEffect, useState } from "react";
import { QueryAction, Schemas, StatusOrder } from "@/lib/admin/constants";
import { useRouter } from "next/navigation";
import { colorStatus } from "./OrderColumn";
import Search from "../common/Search";
import { Button } from "@/components/ui/button";

interface OrderFilterProps {
  counts: {
    all: number
    pending: number
    shipping: number
    done: number
    cancelled: number
  }
}

export interface IOrderFilter {
  statusOrder: string
}

const OrderFilter: React.FC<OrderFilterProps> = ({ counts }) => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [statusOrder, setStatusOrder] = useState<string>("");
  const [query,] = useState<IOrderFilter>({
    statusOrder: "",
  })

  const handleStatusChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusOrder(e.target.value);
  }, [])

  const handleSearch = useCallback(() => {
    router.push(`/admin/${Schemas.ORDER}?action=${QueryAction.SEARCH}&query=${name}`)
  }, [name, router])

  const handleFilter = useCallback(() => {
    router.push(`/admin/${Schemas.ORDER}?action=${QueryAction.FILTER}&statusOrder=${statusOrder}`)
  }, [router, statusOrder])

  useEffect(() => {
    query.statusOrder = statusOrder;
  }, [statusOrder, query])

  return (
    <div className="flex flex-col border-2 p-4 rounded gap-4">
      <h2 className="text-xl font-bold">Filter</h2>
      <div className="flex flex-row gap-4">
        {/* <Button size={"lg"} >All ({counts?.all || 0})</Button>
        <Button size={"lg"} className="bg-green-500" >Active ({counts.active || 0})</Button>
        <Button size={"lg"} className="bg-red-500">Inactive ({counts.inactive || 0})</Button> */}
        {
          counts && Object.entries(counts).map(([key, value], index) => (
            <Button key={index} size={"lg"} className={colorStatus(key)}>{key} ({value})</Button>
          ))
        }
      </div>
      <div className="flex gap-4 mb-4">
        <Search query={name} setQuery={setName} handleSearch={handleSearch} />
        <select
          value={statusOrder}
          onChange={handleStatusChange}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Status of order</option>
          {
            StatusOrder && Object.values(StatusOrder).map((status, index) => (
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

export default OrderFilter;