import { ILinks, IMeta } from "@/lib/admin/constants";
import LinkButton from "../common/LinkButton";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { DataTable } from "../common/DataTable";
import Pagination from "../common/Paginations";

interface LayoutTableProps {
  schemaName: string
  columns: any[]
  searchComponent?: React.ReactNode
  filterComponent?: React.ReactNode | null
  response: {
    data: any[],
    meta: IMeta,
    links: ILinks
  }
  createLink?: string
}

const LayoutTable: React.FC<LayoutTableProps> = ({ schemaName, filterComponent, columns, response, createLink }) => {

  return (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <p className="text-4xl font-bold ">{schemaName.toUpperCase()}</p>
        {createLink && <LinkButton href={createLink} text={`Create ${schemaName}`} />}
      </div>
      <Separator className="bg-black my-4" />
      {filterComponent && filterComponent}
      <DataTable columns={columns} data={response.data} searchKey="title" />
      <Pagination meta={response.meta} links={response.links} />
    </div>
  );
}

export default LayoutTable;