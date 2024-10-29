"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Schemas, StatusOrder } from "@/lib/admin/constants";
import { IOrder } from "@/services/admin/order.service";
import { formatDate } from "@/lib/utils";
import Delete from "../common/Delete";
import Edit from "../common/Edit";
import { Button } from "@/components/ui/button";

export const colorStatus = (status: string) => {
  let color;
  switch (status) {
    case StatusOrder.DONE:
      color = "bg-green-400";
      break;
    case StatusOrder.PENDING:
      color = "bg-yellow-400";
      break;
    case StatusOrder.CANCELED:
      color = "bg-red-400";
      break;
    case StatusOrder.SHIPPING:
      color = "bg-blue-400";
      break;
    default:
      color = "bg-black";
      break;
  }
  return color;
};

export const columns: ColumnDef<IOrder>[] = [
  {
    accessorKey: "ID",
    header: "Order ID",
    cell: ({ row }) => (
      <Link
        href={`/admin/${Schemas.ORDER}/${row.original.order_ID}`}
        className="hover:text-red-500"
      >
        {row.original?.order_ID}
      </Link>
    ),
  },
  {
    accessorKey: "statusOrder",
    header: "Status Order",
    cell: ({ row }) => (
      <Button className={`${colorStatus(row.original.statusOrder || '')} text-white`}>
        {row.original?.statusOrder || 'Unknown'}
      </Button>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => (
      <Link
        href={`/admin/${Schemas.ORDER}/${row.original.id}`}
        className="hover:text-red-500"
      >
        {formatDate(String(row.original?.createdAt))}
      </Link>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => (
      <Link
        href={`/admin/${Schemas.ORDER}/${row.original.id}`}
        className="hover:text-red-500"
      >
        {formatDate(String(row.original?.updatedAt))}
      </Link>
    ),
  },
  {
    id: "actions",
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) =>
      <div className="flex flex-row gap-2">
        <Delete item={Schemas.ORDER} id={row.original?.id || ''} />
        <Edit item={Schemas.ORDER} id={row.original?.id || ''} />
      </div>,
  },
];