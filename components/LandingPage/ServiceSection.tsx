import Image from "next/image";
import flowerSubscribtion from "../../public/landingpage/serviceSection/flowerSubscription.png";
import Button, { ButtonType } from "../common/Button";
import weddingEventDecor from "../../public/landingpage/serviceSection/weddingEventDecor.png"

const ServiceSection = () => {
  return (
    <div className="flex flex-col border-t-[1px] border-black items-center">
      <div className="py-20">
        <h2 className="text-mobile-heading-2 lg:text-heading-2">Our Service</h2>
      </div>
      {/* Mini Section 1 */}
      <div className="flex flex-col lg:flex-row h-full border-t-[1px] border-black">
        <div className="flex items-center lg:w-1/2 overflow-hidden border-r-[1px] border-black">
          <Image src={flowerSubscribtion} alt="Flower Subcription" className="cursor-pointer object-cover transition-transform duration-300 hover:scale-110 w-full h-full" />
        </div>
        <div className="flex flex-col lg:w-1/2 items-center p-20 gap-16 justify-center">
          <div className="flex flex-col gap-6 items-center justify-center text-center">
            <p className="text-mobile-overline lg:text-overline animate-on-scroll">SERVICE</p>
            <h2 className="text-mobile-heading-2 lg:text-heading-2 animate-on-scroll">Flower Subscriptions</h2>
            <span className="text-mobile-subtitle lg:text-subtitle animate-on-scroll">
              Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.
            </span>
          </div>
          <Button label="Subscribe now" type={ButtonType.Secondary} />
        </div>
      </div>
      {/* Mini Section 2 */}
      <div
        className="flex flex-col items-center p-20 gap-16 justify-center border-t-[1px] border-black h-screen w-full bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${"https://uploads-ssl.webflow.com/6400d82951450021c2d1eb7b/64a0432fd429f309141ad736_!!!!!.webp"})` }}
      >
        <div className="flex flex-col gap-6 items-center justify-center text-center text-white bg-opacity-70 p-8 rounded">
          <p className="text-mobile-overline lg:text-overline">SERVICE</p>
          <h2 className="text-mobile-heading-2 lg:text-heading-2">Wedding & Event Decor</h2>
          <span className="text-mobile-subtitle lg:text-subtitle">
            Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.
          </span>
        </div>
        <Button label="Inquire Now" type={ButtonType.Secondary} />
      </div>
    </div>
  );
}

export default ServiceSection;