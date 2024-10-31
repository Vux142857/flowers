import localFont from 'next/font/local'
import Telegram from '../icons/Telegram';
import Twitter from '../icons/Twitter';
import Facebook from '../icons/Facebook';
import Pinterest from '../icons/Pinterest';
import Instagram from '../icons/Instagram';
import founder from '../../public/aboutUs/section1/image.png'
import Image from 'next/image';
const zapfino = localFont({ src: '../../public/fonts/ZapfinoExtraLT-Two.ttf' })
const FirstSection = () => {
  return (
    <div className="flex flex-col lg:flex-row border-t-[1px] border-black lg:h-screen">
      <div className="flex flex-col lg:w-1/2 p-20 border-r-[1px] border-black items-center justify-center text-center gap-16">
        <div className='flex flex-col gap-6 animate-on-scroll'>
          <h2 className="text-mobile-heading-2 lg:text-heading-2">Our Story</h2>
          <div className={zapfino.className}><h2 className="text-mobile-heading-2 lg:text-heading-2">About</h2></div>
          <h2 className="text-mobile-heading-2 lg:text-heading-2 animate-on-scroll">Kyiv LuxeBouquets</h2>
          <span>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</span>
        </div>
        <div className='flex flex-row justify-between gap-8 animate-on-scroll'>
          <div className='flex items-center p-3 cursor-pointer rounded-full border-black border-[1px]'><Instagram /></div>
          <div className='flex items-center p-3 cursor-pointer rounded-full border-black border-[1px]'><Pinterest /></div>
          <div className='flex items-center p-3 cursor-pointer rounded-full border-black border-[1px]'><Facebook /></div>
          <div className='flex items-center p-3 cursor-pointer rounded-full border-black border-[1px]'><Twitter /></div>
          <div className='flex items-center p-3 cursor-pointer rounded-full border-black border-[1px]'><Telegram /></div>
        </div>
      </div>
      <div className='flex items-center lg:w-1/2'>
        <Image src={founder} alt='founder' className='object-cover w-full h-full' />
      </div>
    </div>
  );
}

export default FirstSection;