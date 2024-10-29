import CategoryForm from "@/components/admin/category/CategoryForm"
import Loader from "@/components/admin/common/Loader"
import categoryService from "@/services/admin/category.service"

const EditCategory = async ({ params }: { params: { id: string } }) => {
  const categoryDetails = await categoryService.getCategoryById(params.id)
  if (categoryDetails?.message) return <Loader />
  return categoryDetails && <CategoryForm initialData={categoryDetails} />
}

export default EditCategory