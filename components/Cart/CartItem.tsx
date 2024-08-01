import Image, { StaticImageData } from "next/image";

interface CartItemProps {
  image: string | StaticImageData;
  name: string;
  price: number;
  quantity: number;
}
const CartItem: React.FC<CartItemProps> = (props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex items-center">
        <Image src={props.image} alt={props.name} width={160} height={160} />
      </div>
      <div className="flex flex-row justify-between py-10 w-full">
        <div className="flex flex-col gap-4 text-start">
          <p className="text-subtitle">{props.name}</p>
          <p className="text-body">Quantiy {"(" + props.quantity + ")"}</p>
          <p className="text-subtitle">{"$" + props.price}</p>
        </div>
        <div className="flex items-center text-button text-end text-gray-500 cursor-pointer">
          Remove
        </div>
      </div>
    </div>
  );
}

export default CartItem;