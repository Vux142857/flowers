import Image from 'next/image';
import image1 from '../../public/aboutUs/section2/image1.png';
import image2 from '../../public/aboutUs/section2/image2.png';
import image3 from '../../public/aboutUs/section2/image3.png';
import Button, { ButtonType } from '../common/Button';
import Link from 'next/link';

const SecondSection = () => {
  const mockData = [
    {
      title: 'Expertly Crafted Bouquets',
      body: 'At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.',
      image: image1
    },
    {
      title: 'Bouquets, Gifts & Ambiance',
      body: 'In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv.',
      image: image2
    },
    {
      title: 'Making Every Day Special',
      body: 'Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the highest quality flowers, exceptional customer service, and a seamless online experience that will make you feel confident and satisfied with your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful bouquets and gifts.',
      image: image3
    }
  ];

  return (
    <div className="flex flex-col items-center border-t-[1px] border-black">
      {/* First Section */}
      <div className="flex flex-col items-center p-20 gap-16 justify-center">
        <div className="flex flex-col gap-6 items-center justify-center text-center animate-on-scroll">
          <p className="text-mobile-overline lg:text-overline">OUR STORY</p>
          <h2 className="text-mobile-heading-2 lg:text-heading-2">Our Founder&rsquo;s Passion</h2>
          <span className="text-mobile-subtitle lg:text-subtitle">
            Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and her vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.
          </span>
        </div>
      </div>

      {/* Second Section */}
      <div className='flex flex-col items-center'>
        {
          mockData.map((item, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center justify-center border-t-[1px] border-black ">
              <div className={`flex flex-col gap-6 p-20 lg:w-1/2 order-1 animate-on-scroll-up ${index % 2 === 0 ? 'lg:-order-1' : 'lg:order-1'}`}>
                <h2 className="text-mobile-heading-2 lg:text-heading-2">{item.title}</h2>
                <span className='animate-on-scroll-up'>{item.body}</span>
              </div>
              <div className={`flex items-center lg:w-1/2 border-t lg:border-t-0 ${index % 2 === 0 ? 'lg:border-r-[1px]' : 'lg:border-l-[1px]'} border-black -order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:-order-1'}`}>
                <Image src={item.image} alt={item.title} className="object-cover w-full h-full" />
              </div>
            </div>
          ))
        }
      </div>

      {/* Final Section */}
      <div className="flex flex-col gap-6 items-center justify-center text-center p-20 border-t-[1px] border-black w-full">
        <h2 className="text-mobile-heading-2 lg:text-heading-2">Discover Our Beautiful Bouquets</h2>
        <span className="text-mobile-subtitle lg:text-subtitle">
          Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping
        </span>
        <Link href='/'><Button label="Shop now" type={ButtonType.Primary} /></Link>
      </div>
    </div>
  );
};

export default SecondSection;
