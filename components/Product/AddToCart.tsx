"use client"
import { IProduct } from "@/services/client/product.service";
import Button from "../common/Button";
import Counter from "../common/Counter";
import ProductSlider from "../common/Slider";
import PriceOptions from "./PriceOption";
import { useState } from "react";
import useCart from "@/hooks/useCart";

interface AddToCartProps {
  productDetail: IProduct;
  combineProducts: IProduct[];
}
const AddToCart: React.FC<AddToCartProps> = ({ productDetail, combineProducts }) => {
  const { addItem } = useCart();
  const [count, setCount] = useState(1);
  const [selectedOption, setSelectedOption] = useState('one-time');

  // Counter
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const addToCart = () => {
    addItem({ product: productDetail, quantity: count });
  };

  return (
    <>
      {/* Quantity */}
      <div className="flex flex-row items-center gap-4">
        <p className="text-mobile-subtitle lg:text-subtitle">Quantity</p>
        <Counter count={count} increment={increment} decrement={decrement} />
      </div>
      {/* Combine with */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-mobile-subtitle lg:text-subtitle">Excellent Combination with:</p>
          <p className="text-mobile-body lg:text-body text-light-gray">Vase Not Included</p>
        </div>
        <ProductSlider products={combineProducts} />
      </div>
      {/* Option with */}
      <PriceOptions price={productDetail.price} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      {/* Button */}
      <Button label="Add to cart" onSubmit={addToCart} />
    </>
  );
}

export default AddToCart;