import Loader from "@/components/admin/common/Loader";
import { columns } from "@/components/admin/product/ProductColumn";
import { convertLinks, LIMIT_PER_PAGE, QueryAction, Schemas, StatusType } from "@/lib/admin/constants";
import categoryService from "@/services/admin/category.service";
import productService from "@/services/admin/product.service";
import ProductFilter from "@/components/admin/product/ProductFilter";
import LayoutTable from "@/components/admin/layout/LayoutTable";
const Product = async (
  {
    searchParams,
  }: {
    searchParams: { [key: string]: string }
  }
) => {
  const { query, status, category, action, limit, page } = searchParams;
  let products;

  switch (action) {
    case QueryAction.FILTER:
      products = await productService.filterProducts(status || 'active', category, parseInt(page) || 1, parseInt(limit) || LIMIT_PER_PAGE);
      break;
    case QueryAction.SEARCH:
      products = await productService.searchProducts(query, parseInt(page) || 1, parseInt(limit) || LIMIT_PER_PAGE);
      break;
    default:
      products = await productService.getProducts(parseInt(page) || 1, parseInt(limit) || LIMIT_PER_PAGE);
      break;
  }
  
  if (products?.links){
    products.links = convertLinks(
      Schemas.PRODUCT,
      products.links,
      action || '',
    )
  }
  const [categories, countActive, countInactive] = await Promise.all([
    categoryService.getCategories(),
    productService.countProducts(StatusType.ACTIVE),
    productService.countProducts(StatusType.INACTIVE),
  ])

  if (countActive?.message || countInactive?.message) {
    return <Loader />;
  }

  const counts = {
    all: products?.meta?.totalItems || 0,
    active: countActive || 0,
    inactive: countInactive || 0
  }

  const productFilter = (products && categories && countActive) ?
    <ProductFilter categories={categories?.data} counts={counts} /> :
    (null);

  return products ? (
    <LayoutTable schemaName={Schemas.PRODUCT} filterComponent={productFilter} columns={columns} response={products} createLink="/admin/product/new" />
  ) : <Loader />;
}

export default Product;