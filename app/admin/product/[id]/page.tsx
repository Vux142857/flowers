import Loader from "@/components/admin/common/Loader"
import ProductForm from "@/components/admin/product/ProductForm"
import productService from "@/services/admin/product.service"

const EditProduct = async ({ params }: { params: { id: string } }) => {
  const productDetail = await productService.getProductById(params.id)
  if (productDetail?.message) {
    return <Loader />
  }
  return productDetail && <ProductForm initialData={productDetail} />
}

export default EditProduct