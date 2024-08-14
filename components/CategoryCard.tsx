import Image, { StaticImageData } from "next/image";
import Button from "./common/Button";

interface CategoryCardProps {
  image: string | StaticImageData;
  title: string;
  isLeft?: boolean;
}
const CategoryCart: React.FC<CategoryCardProps> = ({ image, title, isLeft = true }) => {

  const leftDir = (
    <div className="flex flex-row border-t-[1px] border-black">
      <div className="w-1/2 flex flex-col relative items-center justify-center">
        <h3 className="text-mobile-heading-3 lg:text-heading-3">{title}</h3>
        <div className="absolute bottom-5 lg:bottom-10 border-t-[1px] border-blackborder-t-[1px] border-black">
          <Button label="Shop now" isRightIcon={true}/>
        </div>
      </div>
      <div className="w-1/2 border-l-[1px] border-black overflow-hidden">
        <Image src={image} alt={title} className="cursor-pointer w-full h-full object-cover transition-transform duration-300 hover:scale-150" />.
      </div>
    </div>
  )

  const rightDir = (
    <div className="flex flex-row border-t-[1px] border-black">
      <div className="w-1/2 overflow-hidden">
        <Image src={image} alt={title} className="cursor-pointer w-full h-full object-cover transition-transform duration-300 hover:scale-150" />.
      </div>
      <div className="w-1/2 flex flex-col relative items-center justify-center border-l-[1px] border-black">
        <h3 className="text-mobile-heading-3 lg:text-heading-3">{title}</h3>
        <div className="absolute bottom-5 lg:bottom-10 border-t-[1px] border-blackborder-t-[1px] border-black">
          <Button label="Shop now" isLeftIcon={true} onClick={() => { }} />
        </div>
      </div>
    </div>
  )
  return (
    isLeft ? leftDir : rightDir
  );
}

export default CategoryCart;