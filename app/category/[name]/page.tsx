import Layout from "@/components/Layout/Layout";
import ProductCard from "@/components/Category/ProductCard";
import categoryService from "@/services/client/category.service";
import productService, { IProduct } from "@/services/client/product.service";
import Image from "next/image";

const Category = async (
  {
    searchParams,
  }: {
    searchParams: { [key: string]: string }
  }
) => {
  const [category, productsResponse] = await Promise.all([
    categoryService.getCategory(searchParams.id),
    productService.getProductsByCategory(searchParams.id, 1, 100)
  ]);
  const products = productsResponse?.data;

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row w-full min-h-screen border-t-[0.5px] border-black">
        {/* Left */}
        <div className='lg:w-1/2 flex flex-col items-center border-r-[1px] border-black lg:sticky lg:top-0 h-screen overflow-hidden relative'>
          <Image src={category.imageUrl} alt={category.name} className="cursor-pointer w-full h-full object-cover transition-transform duration-300 hover:scale-125" width={1080} height={1080} />
          <div className="z-10 absolute h-full flex flex-col gap-6 items-center justify-center text-center text-white bg-opacity-70 p-8 rounded">
            <h1 className="text-mobile-heading-1 lg:text-heading-1">{category.name}</h1>
          </div>
        </div>
        {/* Right */}
        <div className='lg:w-1/2 flex flex-col'>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {products.map((item: IProduct) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Category;