import Loader from "@/components/admin/common/Loader";
import LayoutTable from "@/components/admin/layout/LayoutTable";
import { columns } from "@/components/admin/order/OrderColumn";
import OrderFilter from "@/components/admin/order/OrderFilter";
import { convertLinks, LIMIT_PER_PAGE, QueryAction, Schemas, StatusOrder } from "@/lib/admin/constants";
import orderService from "@/services/admin/order.service";

const Order = async (
  {
    searchParams,
  }: {
    searchParams: { [key: string]: string }
  }
) => {

  const { query, statusOrder, action, limit, page } = searchParams;
  let orders;
  switch (action) {
    case QueryAction.FILTER:
      orders = await orderService.filterOrders(statusOrder || 'pending', parseInt(page) || 1, parseInt(limit) || LIMIT_PER_PAGE);
      break;
    case QueryAction.SEARCH:
      orders = await orderService.searchOrders(query, parseInt(page) || 1, parseInt(limit) || LIMIT_PER_PAGE);
      break;
    default:
      orders = await orderService.getOrders(parseInt(page) || 1, parseInt(limit) || LIMIT_PER_PAGE);
      break;
  }

  const [countPending, countDone, countShipping, countCancelled] = await Promise.all([
    orderService.countOrders(StatusOrder.PENDING),
    orderService.countOrders(StatusOrder.DONE),
    orderService.countOrders(StatusOrder.SHIPPING),
    orderService.countOrders(StatusOrder.CANCELED),
  ]);

  if (orders?.links){
    orders.links = convertLinks(
      Schemas.ORDER,
      orders.links,
      action || '',
    )
  }

  if (orders?.message || countPending?.message || countDone?.message || countShipping?.message || countCancelled?.message) {
    return <Loader />;
  }

  
  const counts = {
    all: orders?.meta?.totalItems || 0,
    pending: countPending || 0,
    cancelled: countCancelled || 0,
    done: countDone || 0,
    shipping: countShipping || 0
  }
  
  const orderFilter = (orders) ? (
    <OrderFilter counts={counts} />
  ) : (null);

  return orders ? (
    <LayoutTable schemaName={Schemas.ORDER} columns={columns} response={orders} filterComponent={orderFilter}/>
  ) : (<Loader />);
};

export default Order;