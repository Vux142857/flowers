import Image from 'next/image';
import flowerAndGirl from '../../public/landingpage/section1/flowerAndGirl.png';
import CategoryCart from '../CategoryCard';
import categoryService, { ICategory } from '@/services/client/category.service';

const CategorySection = async () => {
  const response = await categoryService.getCategories();
  const categories: ICategory[] = response?.data;
  if (!Array.isArray(categories) || categories.length <= 0) {
    return null;
  } else {
    categories.sort((a, b) => a.order - b.order);
    categories.map((item: ICategory) => {
      item.slug = item.name.toLowerCase().replace(/ /g, '-');
    })
  }

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Left */}
      <div className='lg:w-1/2 flex flex-col items-center p-20 border-r-[1px] border-t-[1px] border-black lg:sticky lg:top-0 h-screen'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4 justify-start items-start'>
            <h1 className="text-mobile-heading-1 lg:text-heading-1 animate-on-scroll">Kyiv LuxeBouquets ®</h1>
            <p className="text-mobile-heading-6 lg:text-heading-6 animate-on-scroll">
              Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery ServiceDiscover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service
            </p>
          </div>
          <div className='flex flex-row gap-4 pt-6 justify-between items-end border-t-[1px] border-black'>
            <div className='w-1/2'><Image src={flowerAndGirl} alt='abc' /></div>
            <p className="w-1/2 text-mobile-caption lg:text-caption animate-on-scroll">
              Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.
            </p>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className='lg:w-1/2 flex flex-col'>
        {categories.map((item: ICategory, index: number) => (
          <CategoryCart key={index} title={item.name} imageUrl={item.imageUrl || ''} slug={item.slug || ''} id={item.id} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
