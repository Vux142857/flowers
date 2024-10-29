"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Schemas } from "@/lib/admin/constants";
import { formatDate } from "@/lib/utils";
import { IUser } from "@/services/admin/user.service";
import Delete from "../common/Delete";
import Edit from "../common/Edit";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <Link
        href={`/admin/${Schemas.CUSTOMER}/${row.original.id}`}
        className="hover:text-red-500"
      >
        {row.original.email}
      </Link>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Button
        // href={`/admin/${Schemas.CUSTOMER}/${row.original.id}`}
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
        href={`/admin/${Schemas.CUSTOMER}/${row.original.id}`}
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
        href={`/admin/${Schemas.CUSTOMER}/${row.original.id}`}
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
      <Delete item={Schemas.CUSTOMER} id={row.original?.id || ''} />
      <Edit item={Schemas.CUSTOMER} id={row.original?.id || ''} />
    </div>,
  },
];