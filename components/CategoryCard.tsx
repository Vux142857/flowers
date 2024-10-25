import Image, { StaticImageData } from "next/image";
import Button from "./common/Button";
import Link from "next/link";

interface CategoryCardProps {
  imageUrl: string | StaticImageData;
  id: string;
  title: string;
  slug: string;
  isLeft?: boolean;
}
const CategoryCart: React.FC<CategoryCardProps> = ({ imageUrl, id, slug, title, isLeft = true }) => {

  const leftDir = (
    <div className="flex flex-row border-t-[1px] border-black">
      <div className="w-1/2 flex flex-col relative items-center justify-center">
        <h3 className="text-mobile-heading-3 lg:text-heading-3">{title}</h3>
        <Link href={`/category/${slug}?id=${id}`} className="absolute bottom-5 lg:bottom-10 border-t-[1px] border-blackborder-t-[1px] border-black">
          <Button label="Shop now" isRightIcon={true} />
        </Link>
      </div>
      <Link href={`/category/${slug}?id=${id}`} className="w-1/2 border-l-[1px] border-black overflow-hidden">
        <Image src={imageUrl} alt={title} className="cursor-pointer w-full h-full transition-transform duration-300 hover:scale-150" width={1080} height={1080} />.
      </Link>
    </div>
  )

  const rightDir = (
    <div className="flex flex-row border-t-[1px] border-black">
      <Link href={`/category/${slug}?id=${id}`} className="w-1/2 overflow-hidden">
        <Image src={imageUrl} alt={title} className="cursor-pointer w-full h-full object-cover transition-transform duration-300 hover:scale-150" width={1080} height={1080} />.
      </Link>
      <div className="w-1/2 flex flex-col relative items-center justify-center border-l-[1px] border-black">
        <h3 className="text-mobile-heading-3 lg:text-heading-3">{title}</h3>
        <Link href={`/category/${slug}?id=${id}`} className="absolute bottom-5 lg:bottom-10 border-t-[1px] border-blackborder-t-[1px] border-black">
          <Button label="Shop now" isLeftIcon={true} />
        </Link>
      </div>
    </div>
  )
  return (
    isLeft ? leftDir : rightDir
  );
}

export default CategoryCart;