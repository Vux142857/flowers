
import { LIMIT_PER_PAGE } from "@/lib/client/constants";
import fetcher from "@/lib/fetcher";

const SERVER = process.env.NEXT_PUBLIC_SERVER as string

export interface ICategory {
  id?: string;
  name: string;
  status: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class CategoryService {
  async getCategories(page: number = 1, limit: number = LIMIT_PER_PAGE) {
    return await fetcher.get(`${SERVER}/categories?page=${page}&limit=${limit}`)
  }
}

const categoryService = new CategoryService()
export default categoryService