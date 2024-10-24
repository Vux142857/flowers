import fetcher from "@/lib/fetcher";
import { LIMIT_PER_PAGE } from "@/lib/client/constants";
import { IUser } from "./user.service";
import { getSession } from "next-auth/react";

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
    const accessToken = await this.getAccessTokenClientSide()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/admin/orders?page=${page}&limit=${limit}`, accessToken)
  }

  async getOrderById(orderId: string) {
    const accessToken = await this.getAccessTokenClientSide()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/admin/orders/${orderId}`, accessToken)
  }

  async postOrder(data: IOrder) {
    const accessToken = await this.getAccessTokenClientSide()
    if (!accessToken) return null
    return await fetcher.postWithAuth(`${SERVER}/orders/create`, data, accessToken)
  }

  private async getAccessTokenClientSide() {
    const session = await getSession();
    const accessToken = session?.user?.accessToken
    if (!accessToken) return null
    return accessToken
  }
}

const orderService = new OrderService()
export default orderService