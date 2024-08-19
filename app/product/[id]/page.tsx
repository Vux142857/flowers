import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import freshFlower from '../../../public/landingpage/section1/freshFlower.png';
import RightSection from "@/components/Product/RightSection";
import ProductCard from "@/components/Category/ProductCard";

const Product = () => {

  const productDetail = {
    id: '1',
    name: 'Fresh Flowers - A',
    category: 'Fresh Flowers',
    image: freshFlower,
    description: 'The bohemian spirit and undeniable beauty of "Blue Harmony" are hard to resist. Hints of blue, coupled with ivory and lavender, make it a harmonious choice that is both calming and balancing. It’s the obvious choice for adding some soft sweetness and tranquility to your space.',
    price: 100,
  }

  const combineProducts = [
    {
      id: '2',
      name: 'Fresh Flowers - B',
      image: freshFlower,
      price: 100
    },
    {
      id: '3',
      name: 'Fresh Flowers - C',
      image: freshFlower,
      price: 100
    },
    {
      id: '4',
      name: 'Fresh Flowers - D',
      image: freshFlower,
      price: 100
    },
    {
      id: '5',
      name: 'Fresh Flowers - E',
      image: freshFlower,
      price: 100
    },
    {
      id: '6',
      name: 'Fresh Flowers - F',
      image: freshFlower,
      price: 100
    },
    {
      id: '7',
      name: 'Fresh Flowers - G',
      image: freshFlower,
      price: 100
    },
    {
      id: '8',
      name: 'Fresh Flowers - H',
      image: freshFlower,
      price: 100
    },
    {
      id: '9',
      name: 'Fresh Flowers - I',
      image: freshFlower,
      price: 100
    },
    {
      id: '10',
      name: 'Fresh Flowers - J',
      image: freshFlower,
      price: 100
    },
    {
      id: '11',
      name: 'Fresh Flowers - K',
      image: freshFlower,
      price: 100
    }
  ]

  const suggestedProducts = [
    {
      id: '2',
      name: 'Fresh Flowers - B',
      image: freshFlower,
      price: 100
    },
    {
      id: '3',
      name: 'Fresh Flowers - C',
      image: freshFlower,
      price: 100
    },
    {
      id: '4',
      name: 'Fresh Flowers - D',
      image: freshFlower,
      price: 100
    },
    {
      id: '5',
      name: 'Fresh Flowers - E',
      image: freshFlower,
      price: 100
    },
  ];
  
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row">
        {/* Left */}
        <div className="lg:sticky lg:h-screen lg:top-0 flex items-center lg:w-1/2 overflow-hidden border-t-[1px] border-r-[1px] border-black">
          <Image src={freshFlower} alt={productDetail.name} className="sticky top-0 cursor-pointer w-full h-full object-cover transition-transform duration-300 hover:scale-150" />
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