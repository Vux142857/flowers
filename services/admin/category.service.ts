
import { authOption } from "@/lib/server/authOption";
import { LIMIT_PER_PAGE } from "@/lib/admin/constants";
import fetcher from "@/lib/fetcher";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

const SERVER = process.env.NEXT_PUBLIC_SERVER as string

export interface ICategory {
  id?: string;
  name: string;
  status: string;
  order: number;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  imageUrl?: string;
}

class CategoryService {

  async getCategories(page: number = 1, limit: number = LIMIT_PER_PAGE) {
    return await fetcher.get(`${SERVER}/categories?page=${page}&limit=${limit}`)
  }

  async getCategoryById(categoryId: string) {
    const accessToken = await this.getAccessTokenServerSide()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/categories/${categoryId}`, accessToken)
  }

  async filterCategories(status: string = 'active', page: number = 1, limit: number = LIMIT_PER_PAGE) {
    const accessToken = await this.getAccessTokenServerSide()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/categories/filter?status=${status}&page=${page}&limit=${limit}`, accessToken)
  }

  async searchCategories(query: string, page: number = 1, limit: number = LIMIT_PER_PAGE) {
    const accessToken = await this.getAccessTokenServerSide()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/categories/search?query=${query}&page=${page}&limit=${limit}`, accessToken,)
  }

  async countCategories(status: string) {
    const accessToken = await this.getAccessTokenServerSide()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/categories/count?status=${status}`, accessToken)
  }

  async postCategory(data: ICategory) {
    const accessToken = await this.getAccessTokenClientSide()
    if (!accessToken) return null
    return await fetcher.postWithAuth(`${SERVER}/categories`, data, accessToken)
  }

  async editCategory(categoryId: string, data: ICategory) {
    try {
      const accessToken = await this.getAccessTokenClientSide()
      if (!accessToken) return null
      return await fetcher.patch(`${SERVER}/categories/${categoryId}`, data, accessToken)
    } catch (error) {
      console.log("editCategory error", error)
    }
  }

  async deleteCategory(categoryId: string) {
    const accessToken = await this.getAccessTokenClientSide()
    if (!accessToken) return null
    return await fetcher.deleteWithAuth(`${SERVER}/categories/${categoryId}`, accessToken)
  }

  private async getAccessTokenServerSide() {
    const session = await getServerSession(authOption);
    const accessToken = session?.user?.accessToken
    if (!accessToken) return null
    return accessToken
  }

  private async getAccessTokenClientSide() {
    const session = await getSession();
    const accessToken = session?.user?.accessToken
    if (!accessToken) return null
    return accessToken
  }
}

const categoryService = new CategoryService()
export default categoryService