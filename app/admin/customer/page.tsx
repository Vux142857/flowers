import LayoutTable from "@/components/admin/layout/LayoutTable";
import { columns } from "@/components/admin/user/UserColumn";
import UserFilter from "@/components/admin/user/UserFilter";
import { convertLinks, LIMIT_PER_PAGE, QueryAction, Schemas, StatusType } from "@/lib/admin/constants";
import userService from "@/services/admin/user.service";
import { Loader } from "lucide-react";

const Customer = async (
  {
    searchParams,
  }: {
    searchParams: { [key: string]: string }
  }
) => {
  const { query, status, action, page, limit } = searchParams;
  let customers;
  switch (action) {
    case QueryAction.FILTER:
      const filter = {
        status: status || 'active',
      }
      customers = await userService.filterCustomers(filter.status, parseInt(page) || 1, parseInt(limit) || LIMIT_PER_PAGE);
      break;
    case QueryAction.SEARCH:
      customers = await userService.searchCustomers(query, parseInt(page) || 1, parseInt(limit) || LIMIT_PER_PAGE);
      break;
    default:
      customers = await userService.getAllCustomers(parseInt(page) || 1, parseInt(limit) || LIMIT_PER_PAGE);
      break;
  }

  const [countActive, countInactive] = await Promise.all([
    userService.countUser(StatusType.ACTIVE),
    userService.countUser(StatusType.INACTIVE),
  ]);

  if (customers?.links) {
    customers.links = convertLinks(
      Schemas.CUSTOMER,
      customers.links,
      action || '',
    )
  }

  if (countActive?.message || countInactive?.message) {
    return <Loader />;
  }

  const counts = {
    all: customers?.meta?.totalItems || 0,
    active: countActive || 0,
    inactive: countInactive || 0
  }
  const userFilter = (customers) ?
    <UserFilter counts={counts} /> :
    (<></>);
  return customers ? (
    <LayoutTable schemaName={Schemas.PRODUCT} filterComponent={userFilter} columns={columns} response={customers} createLink="/product/new" />
  ) : <Loader />;
}

export default Customer;