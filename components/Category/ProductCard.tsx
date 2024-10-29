import { IProduct } from "@/services/client/product.service";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCardProps extends IProduct {
  isMain?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <Link href={`/product/${props.slug}?id=${props.id}`} className={`w-full flex items-center justify-center relative border-[0.5px] ${props.isMain ? 'border-black' : 'border-light-gray'} overflow-hidden`}>
      <Image src={props.imageUrl} alt={props.name} className="cursor-pointer w-full h-full object-cover transition-transform duration-300 hover:scale-125" width={1080} height={1080} />
      <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 py-2 flex flex-col items-center">
        {props.isMain &&
          <>
            <h6 className="text-mobile-heading-6 lg:text-heading-6">{props.name}</h6>
            <p className="text-mobile-caption lg:text-caption font-bold text-gray">Price {props.price}$</p>
          </>
        }
      </div>
    </Link>
  );
}

export default ProductCard;