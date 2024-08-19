import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  image: string | StaticImageData;
  price: number;
  isMain?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image, price, isMain = true }) => {
  return (
    <Link href={`/product/${id}`} className={`w-full flex items-center justify-center relative border-[0.5px] ${isMain ? 'border-black' : 'border-ligh'} overflow-hidden`}>
      <Image src={image} alt={name} className="cursor-pointer w-full h-full object-cover transition-transform duration-300 hover:scale-125" />
      <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 py-2 flex flex-col items-center">
        {isMain &&
          <>
            <h6 className="text-mobile-heading-6 lg:text-heading-6">{name}</h6>
            <p className="text-mobile-caption lg:text-caption font-bold text-gray">Price {price}$</p>
          </>
        }
      </div>
    </Link>
  );
}

export default ProductCard;