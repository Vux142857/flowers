import fetcher from "@/lib/fetcher";
import { LIMIT_PER_PAGE } from "@/lib/client/constants";
import { IUser } from "./user.service";
import { getSession } from "next-auth/react";
import { CartItem } from "@/hooks/useCart";

const SERVER = process.env.NEXT_PUBLIC_SERVER as string

export enum PaymentMethod {
  COD = 'COD',
  ZALOPAY = 'ZALOPAY',
}

export enum StatusOrder {
  PENDING = 'pending',
}

export interface IOrder {
  id?: string;
  order_ID?: string;
  fullName: string;
  phone: string;
  address: string;
  note?: string | '';
  shippingCost?: number;
  total: number;
  paymentMethod: PaymentMethod;
  statusOrder: StatusOrder;
  orderItems: CartItem[];
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
    console.log("Data:", data);
    const accessToken = await this.getAccessTokenClientSide()
    if (!accessToken) return null
    return await fetcher.postWithAuth(`${SERVER}/orders`, data, accessToken)
  }

  async createPaymentZaloPay(data: IOrder) {
    const [initOrder, accessToken] = await Promise.all([this.postOrder(data), this.getAccessTokenClientSide()])
    if (!initOrder || !accessToken) return null
    return await fetcher.postWithAuth(`${SERVER}/orders/${initOrder.order_ID}/zalopay`, {}, accessToken)
  }

  private async getAccessTokenClientSide() {
    const session = await getSession();
    const accessToken = session?.user?.accessToken
    if (!accessToken) return null
    return accessToken
  }

  private async getUserClientSide() {
    const session = await getSession();
    const user = session?.user
    if (!user) return null
    return user
  }
}

const orderService = new OrderService()
export default orderService