import Button, { ButtonType } from "../common/Button";

const SecondSection = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row border-t-[1px] border-black">
        {/* Left */}
        <div className='lg:w-1/2 flex flex-col p-20 border-r-[1px] border-black lg:sticky lg:top-0 justify-start items-start'>
          <h2 className="text-mobile-heading-2 lg:text-heading-2 text-start">About us</h2>
        </div>
        {/* Right */}
        <div className='lg:w-1/2 flex flex-col p-20 gap-16 border-r-[1px] border-black items-start justify-between'>
          <div className="flex flex-col text-start gap-6">
            <p className="text-overline">OUR STORY</p>
            <h3 className="text-mobile-heading-3 lg:text-heading-3">Kyiv LuxeBouquets</h3>
            <span className="text-mobile-body lg:text-bodtext-mobile-body">
              Kyiv LuxeBouquets is a modern floral studio that specializes in creating uniquely crafted bouquets and gifts for any occasion. Our team of professional florists is dedicated to providing exceptional customer service and delivering high-quality products. We take pride in our attention to detail and our commitment to excellence. Whether you are celebrating a special occasion or simply want to brighten someone&apos;s day, Kyiv LuxeBouquets has the perfect floral arrangement for you.
            </span>
          </div>
          <div>
            <Button label="Learn More" type={ButtonType.Secondary} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondSection;