import thumb from '../../public/subscription/section3/thumb.png';
import image1 from '../../public/subscription/section3/image1.png';
import image2 from '../../public/subscription/section3/image2.png';
import image3 from '../../public/subscription/section3/image3.png';
import Image from 'next/image';
import PlanCard from '../common/PlanCard';
import Button, { ButtonType } from '../common/Button';
import Counter from '../common/Counter';

const ThirdSection = () => {
  const mockData = [
    {
      image: image1,
      label: 'Classic',
      body:
        <ul className='text-mobile-body lg:text-body list-disc p-4'>
          <li>Price $45</li>
          <li>Free Delivery</li>
          <li>Best for a budget</li>
          <li>Glass vase with first delivery</li>
          <li>Save up to 25%</li>
        </ul>,
    },
    {
      image: image2,
      label: 'Seasonal',
      body:
        <ul className='text-mobile-body lg:text-body list-disc p-4'>
          <li>Price $45</li>
          <li>Free Delivery</li>
          <li>Best seasonal selections</li>
          <li>Glass vase with first delivery</li>
          <li>Luxury candle with your first delivery</li>
          <li>Save up to 28%</li>
        </ul>,
    },
    {
      image: image3,
      label: 'Lux',
      body:
        <ul className='text-mobile-body lg:text-body list-disc p-4'>
          <li>Price $95</li>
          <li>Free Delivery</li>
          <li>Premium arrangement</li>
          <li>Premium vase with first delivery</li>
          <li>Luxury candle with your first delivery</li>
          <li>Save up to 30%</li>
        </ul>,
    }
  ]
  return (
    <div className="flex flex-col lg:flex-row border-t-[1px] border-black">
      {/* Left */}
      <div className="flex flex-col items-center lg:w-1/2 h-full border-r-[1px] border-black px-10 py-20 gap-6">
        {/*  */}
        <div className="flex flex-col text-start gap-6">
          <p className="text-overline">BUILD YOUR SUBSCRIPTION</p>
          <h3 className="text-mobile-heading-3 lg:text-heading-3">Selecting a plan</h3>
          <span className="text-mobile-body lg:text-bodtext-mobile-body">
            Enjoy free shipping on every order and save up to 30%.
            Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To modify, pause, or cancel your subscription, simply log in to your account dashboard. You&apos;re in complete control of your flower delivery experience.
          </span>
        </div>
        {/*  */}
        <div className='flex flex-col gap-2 pb-10'>
          {
            mockData.map((data, index) => (
              <PlanCard key={index} image={data.image} label={data.label} body={data.body} />
            ))
          }
        </div>
        {/*  */}
        <div className='flex flex-col py-10 border-t-[1px] w-full border-light-gray gap-6'>
          <div className='gap-4 flex flex-col items-start'>
            <h4 className='text-mobile-heading-4 lg:text-heading-4'>
              How often do you want flowers delivered ?
            </h4>
            <span className='text-mobile-body lg:text-text-mobile-body'>
              Select the delivery frequency
            </span>
          </div>
          <div className='flex flex-row gap-4 justify-between'>
            <div className='w-1/3 items-center flex'>
              <Button label='Monthly' type={ButtonType.Secondary} isFull={true} />
            </div>
            <div className='w-1/3 items-center flex'>
              <Button label='BI-Weekly' type={ButtonType.Secondary} isFull={true} />
            </div>
            <div className='w-1/3 items-center flex'>
              <Button label='Weekly' type={ButtonType.Secondary} isFull={true} />
            </div>
          </div>
        </div>
        {/*  */}
        <div className='flex flex-col py-10 border-t-[1px] w-full border-light-gray gap-6'>
          <div className='gap-4 flex flex-col items-start'>
            <h4 className='text-mobile-heading-4 lg:text-heading-4'>
              How many deliveries would you like ?
            </h4>
            <span className='text-mobile-body lg:text-text-mobile-body'>
              Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need
            </span>
          </div>
          <div className='flex items-center justify-start'>
            <Counter />
          </div>
        </div>
        {/*  */}
        <div className='flex flex-col py-10 border-t-[1px] w-full border-light-gray gap-6'>
          <Button label='Checkout' isFull={true} />
        </div>
      </div>
      {/* Right */}
      <Image src={thumb} alt={"Subscription"} quality={100} className="lg:sticky lg:top-0 w-full lg:w-1/2 h-full object-cover" />
    </div>
  );
}

export default ThirdSection;