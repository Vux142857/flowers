import Layout from "@/components/Layout/Layout";
import ProductCard from "@/components/Category/ProductCard";
import { mockProducts } from "@/public/mockData/mockData";

const Category = () => {
  const mockData = mockProducts

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row w-full min-h-screen border-t-[0.5px] border-black">
        {/* Left */}
        <div className='lg:w-1/2 flex flex-col items-center border-r-[1px] border-t-[1px] border-black lg:sticky lg:top-0 h-screen'>
          <div
            className="flex flex-col items-center gap-16 justify-center border-t-[1px] border-black h-screen w-full bg-cover bg-fixed bg-center"
            style={{ backgroundImage: `url(${"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/64a0432fd429f309141ad736_!!!!!.webp"})` }}
          >
            <div className="flex flex-col gap-6 items-center justify-center text-center text-white bg-opacity-70 p-8 rounded">
              <h1 className="text-mobile-heading-1 lg:text-heading-1">Fresh Flowers</h1>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className='lg:w-1/2 flex flex-col'>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {mockData.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Category;