import fetcher from "@/lib/fetcher";
import { ICategory } from "./category.service";
import { LIMIT_PER_PAGE } from "@/lib/client/constants";
import { StaticImageData } from "next/image";

const SERVER = process.env.NEXT_PUBLIC_SERVER as string

export interface UnitInProduct {
  name: string
  remaining: number
  price: number
}

export interface IProduct {
  id: string;
  name: string;
  status: string;
  imageUrl: string | StaticImageData;
  price: number;
  remaining: number;
  description?: string;
  category: ICategory;
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
    return await fetcher.get(`${SERVER}/products/${productid}`)
  }

  async filterProducts(status: string = 'active', category: string = '', page: number = 1, limit: number = LIMIT_PER_PAGE) {
    return await fetcher.get(`${SERVER}/products/filter?status=${status}&category=${category}&page=${page}&limit=${limit}`)
  }

  async searchProducts(query: string, page: number = 1, limit: number = LIMIT_PER_PAGE) {
    return await fetcher.get(`${SERVER}/products/search?query=${query}&page=${page}&limit=${limit}`)
  }

  async getProductsByCategory(category: string, page: number = 1, limit: number = LIMIT_PER_PAGE) {
    return await fetcher.get(`${SERVER}/products/filter?category=${category}&page=${page}&limit=${limit}`)
  }
}

const productService = new ProductServices()
export default productService