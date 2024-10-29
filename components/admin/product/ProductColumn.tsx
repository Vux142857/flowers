"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import Delete from "../common/Delete";
import { Button } from "../../ui/button";
import Edit from "../common/Edit";
import { Schemas } from "@/lib/admin/constants";
import { IProduct } from "@/services/admin/product.service";
import { formatDate } from "@/lib/utils";

export const columns: ColumnDef<IProduct>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <Link
        href={`/admin/product/${row.original?.id}`}
        className="hover:text-red-500"
      >
        {row.original.name}
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <Link
        href={`/admin/product/${row.original?.id}`}
        className="hover:text-red-500"
      >
        {row.original?.category?.name}
      </Link>
    ),
  },
  {
    accessorKey: "remaining",
    header: "Remaining",
    cell: ({ row }) => (
      <Link
        href={`/admin/product/${row.original?.id}`}
        className="hover:text-red-500 flex items-center"
      >
        {row.original?.remaining}
      </Link>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <Link
        href={`/admin/product/${row.original?.id}`}
        className="hover:text-red-500 flex items-center"
      >
        {row.original?.remaining}
      </Link>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Button
        // href={`/admin/product-category/${row.original.id}`}
        className={`${row.original?.status === "active" ? "bg-green-400" : "bg-red-400"} text-white`}
      >
        {row.original?.status}
      </Button>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => (
      <Link
        href={`/admin/product/${row.original.id}`}
        className="hover:text-red-500"
      >
        {formatDate(String(row.original.createdAt))}
      </Link>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => (
      <Link
        href={`/admin/product/${row.original.id}`}
        className="hover:text-red-500"
      >
        {formatDate(String(row.original.updatedAt))}
      </Link>
    ),
  },
  {
    id: "actions",
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) =>
      <div className="flex flex-row gap-2">
        <Delete item={Schemas.PRODUCT} id={row.original.id || ''} />
        <Edit item={Schemas.PRODUCT} id={row.original.id || ''} />
      </div>,
  },
];