import useCart, { CartItem } from "@/hooks/useCart";
import Image from "next/image";
import Button from "../common/Button";
import Counter from "../common/Counter";

interface CartItemProps {
  cartItem: CartItem;
}

const CartElement: React.FC<CartItemProps> = ({ cartItem }) => {
  const { product, quantity } = cartItem;
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  const onRemove = () => removeItem(product.id);
  const onIncrease = () => increaseQuantity(product.id);
  const onDecrease =  () => decreaseQuantity(product.id);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4">
      <div className="flex items-center justify-center">
        <Image src={product.imageUrl} alt={product.name} width={160} height={160} />
      </div>
      <div className="flex flex-row justify-between py-10 w-full">
        <div className="flex flex-col gap-4 text-start">
          <p className="text-subtitle">{product.name}</p>
          <p className="text-body">Quantiy {"(" + quantity + ")"}</p>
          <p className="text-subtitle">{"$" + product.price}</p>
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