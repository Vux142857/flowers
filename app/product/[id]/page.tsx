import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import RightSection from "@/components/Product/RightSection";
import ProductCard from "@/components/Category/ProductCard";
import productService from "@/services/client/product.service";

const Product = async (
  {
    searchParams,
  }: {
    searchParams: { [key: string]: string }
  }
) => {
  const productDetail = await productService.getProductById(searchParams.id);
  const combineProductsResponse = await productService.getProductsByCategory(productDetail.category.id);
  const combineProducts = combineProductsResponse?.data.slice(0, 5) || [];
  const suggestedProducts = combineProducts?.slice(0, 4) || [];

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row">
        {/* Left */}
        <div className="lg:sticky lg:h-screen lg:top-0 flex items-center lg:w-1/2 overflow-hidden border-t-[1px] border-r-[1px] border-black">
          <Image src={productDetail.imageUrl} alt={productDetail.name} className="sticky top-0 cursor-pointer w-full h-full object-cover transition-transform duration-300 hover:scale-150" width={1080} height={1080} />
        </div>
        {/* Right */}
        <RightSection productDetail={productDetail} combineProducts={combineProducts} />
      </div>
      <div className="flex items-center justify-center px-2 py-20 border-t-[1px] border-black">
        <h3 className="text-mobile-heading-3 lg:text-heading-3">You may also like…</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t-[0.5px] border-black">
        {
          suggestedProducts.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))
        }
      </div>
    </Layout>
  );
}

export default Product;