'use client';
import CartItem from "../Cart/CartItem";
import InputText from "../common/Input";
import Button from "../common/Button";
import LockIcon from "../icons/LockIcon";
import useCart from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/lib/utils";

const RightSection = () => {
  const { cartItems, total } = useCart();
  const [finalTotal, setFinalTotal] = useState(total);
  const [shipping, setShipping] = useState(0);

  const calculateTotal = () => {
    setFinalTotal(total + shipping);
  }

  useEffect(() => {
    calculateTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, shipping]);

  return (
    <div className="lg:w-1/2 flex flex-col px-20 py-10 items-center justify-center gap-10">
      <p className="text-mobile-overline lg:text-overline">Order summary</p>
      <div className="w-full border-b border-black flex flex-col items-center">
        {
          cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.product.id}
              cartItem={cartItem}
            />
          ))
        }
      </div>
      <div className="flex flex-col border-b border-black gap-4 pb-6 w-full items-center justify-center">
        <span className="text-mobile-body lg:text-body text-center">If you have our gift card, enter the code to get discounts</span>
        <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-2">
          <InputText name="promo" placeholder="Promo code" value="" setValue={() => { }} />
          <Button label="Apply" onSubmit={() => { }} />
        </div>
      </div>
      <div className="w-full flex flex-col border-b border-black gap-6 items-start justify-center pb-6">
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-mobile-body lg:text-body">Subtotal</p>
          <p className="text-mobile-body lg:text-body">{formatCurrency(total)}</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-mobile-body lg:text-body">Shipping</p>
          <p className="text-mobile-body lg:text-body">{formatCurrency(shipping)}</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 items-start justify-between pb-6">
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-mobile-subtitle lg:text-subtitle">Total</p>
          <p className="text-mobile-subtitle lg:text-subtitle">{formatCurrency(finalTotal)}</p>
        </div>
        <div className="flex flex-row gap-1 items-center justify-center text-center w-full">
          <span className="text-mobile-caption lg:text-caption">Secure Checkout</span>
          <LockIcon />
        </div>
      </div>
    </div>
  );
}

export default RightSection;