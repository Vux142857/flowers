
import fetcher from "@/lib/fetcher";
import { IUser } from "./user.service";
import { LIMIT_PER_PAGE, StatusOrder } from "@/lib/admin/constants";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/server/authOption";

const SERVER = process.env.NEXT_PUBLIC_SERVER as string

export interface IOrder {
  id?: string;
  order_ID?: string;
  customer: IUser | null;
  total: number;
  statusOrder?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class OrderService {

  async getOrders(page: number = 1, limit: number = LIMIT_PER_PAGE) {
    const accessToken = await this.getAccessToken()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/admin/orders?page=${page}&limit=${limit}`, accessToken)
  }

  async getOrderById(orderId: string) {
    const accessToken = await this.getAccessToken()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/admin/orders/${orderId}`, accessToken)
  }

  async filterOrders(statusOrder: string, page: number = 1, limit: number = LIMIT_PER_PAGE) {
    const accessToken = await this.getAccessToken()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/admin/orders/filter?statusOrder=${statusOrder}&page=${page}&limit=${limit}`, accessToken)
  }

  async searchOrders(query: string, page: number = 1, limit: number = LIMIT_PER_PAGE) {
    const accessToken = await this.getAccessToken()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/admin/orders/search?query=${query}&page=${page}&limit=${limit}`, accessToken,)
  }

  async countOrders(statusOrder: StatusOrder) {
    const accessToken = await this.getAccessToken()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/admin/orders/count?statusOrder=${statusOrder}`, accessToken)
  }

  async postOrder(data: IOrder) {
    const accessToken = await this.getAccessToken()
    if (!accessToken) return null
    return await fetcher.postWithAuth(`${SERVER}/orders/create`, data, accessToken)
  }

  async editOrder(orderId: string, data: IOrder) {
    const accessToken = await this.getAccessToken()
    if (!accessToken) return null
    return await fetcher.patch(`${SERVER}/admin/orders/${orderId}`, data, accessToken)
  }

  async deleteOrder(orderId: string) {
    const accessToken = await this.getAccessToken()
    if (!accessToken) return null
    return await fetcher.deleteWithAuth(`${SERVER}/admin/orders/${orderId}`, accessToken)
  }

  private async getAccessToken() {
    const session = await getServerSession(authOption);
    const accessToken = session?.user?.accessToken
    if (!accessToken) return null
    return accessToken
  }
}

const orderService = new OrderService()
export default orderService