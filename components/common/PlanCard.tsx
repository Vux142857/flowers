'use client'
import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import { createElement } from "react";

interface PlanCardProps {
  image: StaticImageData | string;
  label: string;
  body: React.ReactNode;
}
const PlanCard: React.FC<PlanCardProps> = ({ image, label, body }) => {
  return (
    <div className="flex flex-col items-center border-[1px] border-light-gray">
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center lg:w-1/2 h-full">
          <Image src={image} alt={"Subscription"} quality={100} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col p-4 gap-4 items-start">
          <p className="text-mobile-subtitle lg:text-subtitle">
            {label}
          </p>
          {body}
        </div>
      </div>
      <Button label="Select" isFull={true} />
    </div>
  );
}

export default PlanCard;