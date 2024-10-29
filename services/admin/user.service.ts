import { authOption } from "@/lib/server/authOption";
import { LIMIT_PER_PAGE } from "@/lib/admin/constants";
import fetcher from "@/lib/fetcher";
import { getServerSession } from "next-auth";

const SERVER = process.env.NEXT_PUBLIC_SERVER as string

export interface IUser {
  id?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  address?: string;
  subscribedId?: string;
  status: string;
  roles: string[] | string;
  createdAt?: Date;
  updatedAt?: Date;
}

class UserService {
  async getAllCustomers(page: number = 1, limit: number = LIMIT_PER_PAGE) {
    const accessToken = await this.getAccessToken()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/users/customer?page=${page}&limit=${limit}`, accessToken)
  }

  async filterCustomers(status: string = 'active', page: number = 1, limit: number = LIMIT_PER_PAGE) {
    const accessToken = await this.getAccessToken()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/users/filter?status=${status}&page=${page}&limit=${limit}`, accessToken)
  }

  async searchCustomers(query: string, page: number = 1, limit: number = LIMIT_PER_PAGE) {
    const accessToken = await this.getAccessToken()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/users/search?query=${query}&page=${page}&limit=${limit}`, accessToken,)
  }

  async countUser(status: string) {
    const accessToken = await this.getAccessToken()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/users/count?status=${status}`, accessToken)
  }

  async deteleUser(userId: string) {
    const accessToken = await this.getAccessToken()
    if (!accessToken) return null
    return await fetcher.deleteWithAuth(`${SERVER}/users/${userId}`, accessToken)
  }

  private async getAccessToken() {
    const session = await getServerSession(authOption);
    const accessToken = session?.user?.accessToken
    if (!accessToken) return null
    return accessToken
  }
}

const userService = new UserService()
export default userService