import useCart, { CartItem } from "@/lib/client/hooks/useCart";
import Image from "next/image";
import Button from "../common/Button";
import Counter from "../common/Counter";

interface CartItemProps {
  cartItem: CartItem;
}

const CartElement: React.FC<CartItemProps> = ({ cartItem }) => {
  const { item, quantity } = cartItem;
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  const onRemove = () => removeItem(item.id);
  const onIncrease = () => increaseQuantity(item.id);
  const onDecrease =  () => decreaseQuantity(item.id);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4">
      <div className="flex items-center justify-center">
        <Image src={item.imageUrl} alt={item.name} width={160} height={160} />
      </div>
      <div className="flex flex-row justify-between py-10 w-full">
        <div className="flex flex-col gap-4 text-start">
          <p className="text-subtitle">{item.name}</p>
          <p className="text-body">Quantiy {"(" + quantity + ")"}</p>
          <p className="text-subtitle">{"$" + item.price}</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Button label="Remove" onSubmit={onRemove} />
          <div className="">
            <Counter
              count={quantity}
              increment={onIncrease}
              decrement={onDecrease} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartElement;