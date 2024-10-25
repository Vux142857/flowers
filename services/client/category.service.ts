
import { LIMIT_PER_PAGE } from "@/lib/client/constants";
import fetcher from "@/lib/fetcher";
import { StaticImageData } from "next/image";

const SERVER = process.env.NEXT_PUBLIC_SERVER as string

export interface ICategory {
  id: string;
  name: string;
  status: string;
  order: number;
  imageUrl?: string | StaticImageData;
  description?: string;
  slug?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class CategoryService {
  async getCategories(page: number = 1, limit: number = LIMIT_PER_PAGE) {
    return await fetcher.get(`${SERVER}/categories?page=${page}&limit=${limit}`)
  }

  async getCategory(id: string) {
    return await fetcher.get(`${SERVER}/categories/${id}`)
  }
}

const categoryService = new CategoryService()
export default categoryService