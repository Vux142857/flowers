"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import Delete from "../common/Delete";
import { Button } from "../../ui/button";
import Edit from "../common/Edit";
import { Schemas } from "@/lib/admin/constants";
import { ICategory } from "@/services/admin/category.service";
import { formatDate } from "@/lib/utils";

export const columns: ColumnDef<ICategory>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <Link
        href={`/admin/${Schemas.CATEGORY}/${row.original.id}`}
        className="hover:text-red-500"
      >
        {row.original.name}
      </Link>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Button
        // href={`/admin/${Schemas.CATEGORY}/${row.original.id}`}
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
        href={`/admin/${Schemas.CATEGORY}/${row.original.id}`}
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
        href={`/admin/${Schemas.CATEGORY}/${row.original.id}`}
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
    cell: ({ row }) => <div className="flex flex-row gap-2">
      <Delete item={Schemas.CATEGORY} id={row.original?.id || ''} />
      <Edit item={Schemas.CATEGORY} id={row.original?.id || ''} />
    </div>,
  },
];