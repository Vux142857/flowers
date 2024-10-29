import Image from "next/image";
import Link from "next/link";

interface ProductCardAlignProps {
  imageUrl: string;
  name: string;
  price: number;
  slug: string;
  id: string;
}

const ProductCardAlign: React.FC<ProductCardAlignProps> = (props) => {
  return (
    <Link href={`/product/${props.slug}?id=${props.id}`} className={'w-full flex flex-col items-center justify-center relative border-[0.5px] border-light-gray h-60'}>
      <div className="flex h-2/3 items-center w-full overflow-hidden">
        <Image src={props.imageUrl} alt={props.name} className=" cursor-pointer w-full h-full object-fit transition-transform duration-300 hover:scale-125" width={1080} height={1080} />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 p-2 h-1/3 text-center">
        <h6 className="text-mobile-heading-6 lg:text-heading-6">{props.name}</h6>
        <p className="text-mobile-caption lg:text-caption font-bold text-gray">{props.price}$</p>
      </div>
    </Link >
  );
}

export default ProductCardAlign;