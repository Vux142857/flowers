import fetcher from "@/lib/fetcher";
import { LIMIT_PER_PAGE } from "@/lib/admin/constants";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/server/authOption";
import { getSession } from "next-auth/react";
import { ICategory } from "./category.service";

const SERVER = process.env.NEXT_PUBLIC_SERVER as string

export interface UnitInProduct {
  name: string
  remaining: number
  price: number
}

export interface IProduct {
  id?: string;
  name: string;
  status: string;
  categoryId: string;
  category?: ICategory;
  imageUrl: string | string[] | undefined;
  price: number;
  remaining: number;
  description?: string;
  tags?: string[];
  slug: string;
  couponCode?: string;
  // suggestion?: CreateSuggestionDto | null;
  createdAt?: string;
  updatedAt?: string;
}

class ProductServices {

  async getProducts(page: number = 1, limit: number = LIMIT_PER_PAGE) {
    return await fetcher.get(`${SERVER}/products?page=${page}&limit=${limit}`)
  }

  async getProductById(productid: string) {
    const accessToken = await this.getAccessTokenServerSide()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/products/${productid}`, accessToken)
  }

  async filterProducts(status: string = 'active', category: string = '', page: number = 1, limit: number = LIMIT_PER_PAGE) {
    const accessToken = await this.getAccessTokenServerSide()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/admin/products/filter?status=${status}&category=${category}&page=${page}&limit=${limit}`, accessToken)
  }

  async searchProducts(query: string, page: number = 1, limit: number = LIMIT_PER_PAGE) {
    const accessToken = await this.getAccessTokenServerSide()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/admin/products/search?query=${query}&page=${page}&limit=${limit}`, accessToken,)
  }

  async countProducts(status: string, category: string = '') {
    const accessToken = await this.getAccessTokenServerSide()
    if (!accessToken) return null
    return await fetcher.getWithAuth(`${SERVER}/admin/products/count?status=${status}&category=${category}`, accessToken)
  }

  async postProduct(data: IProduct) {
    const accessToken = await this.getAccessTokenClientSide()
    if (!accessToken) return null
    return await fetcher.postWithAuth(`${SERVER}/admin/products`, data, accessToken)
  }

  async editProduct(productId: string, data: IProduct) {
    const accessToken = await this.getAccessTokenClientSide()
    if (!accessToken) return null
    return await fetcher.patch(`${SERVER}/admin/products/${productId}`, data, accessToken)
  }

  async deleteProduct(productId: string) {
    const accessToken = await this.getAccessTokenServerSide()
    if (!accessToken) return null
    return await fetcher.deleteWithAuth(`${SERVER}/admin/products/${productId}`, accessToken)
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

const productService = new ProductServices()
export default productService