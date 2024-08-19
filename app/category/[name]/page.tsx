import Layout from "@/components/Layout/Layout";
import freshFlower from '../../../public/landingpage/section1/freshFlower.png';
import ProductCard from "@/components/Category/ProductCard";

const Category = () => {

  const mockData = [
    {
      id: '1',
      name: 'Fresh Flowers - A',
      image: freshFlower,
      price: 100
    },
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
    },
    {
      id: '12',
      name: 'Fresh Flowers - L',
      image: freshFlower,
      price: 100
    }
  ]

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
            {mockData.map((item, index) => (
              <ProductCard key={index} id={item.id} name={item.name} image={item.image} price={100} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Category;