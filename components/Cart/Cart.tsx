'use client'
import CloseIcon from "../icons/CloseIcon";
import { memo, useState } from "react";
import CartIcon from "../icons/CartIcon";
import Button from "../common/Button";
import AnimatedText from "../common/AnimatedText";
import useCart from "@/hooks/useCart";
import CartElement from "./CartItem";
import { formatCurrency } from "@/lib/utils";
import { useRouter } from "next/navigation";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const { cartItems, total } = useCart();

  const openCart = () => {
    setIsCartOpen(true);
  }

  const closeCart = () => {
    setIsCartOpen(false);
  }

  return (
    <>
      <div className="w-1/2 hidden lg:block px-6 py-8 border-l-[1px] border-black cursor-pointer" onClick={openCart}><AnimatedText text="Cart" /></div>
      <div className="lg:hidden w-14 h-14 flex items-center justify-center border-l-[1px] border-black cursor-pointer" onClick={openCart}>
        <CartIcon />
      </div>
      <>
        <div className={`fixed top-0 right-0 flex flex-col w-2/4 max-h-full bg-white shadow-lg z-50 border-black border-[1px] overflow-y-auto transform transition-transform duration-800 ease-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-row px-10 py-4 justify-between items-center border-b border-black">
            <h6 className="text-heading-6">Shopping cart</h6>
            <div className="cursor-pointer flex items-center" onClick={closeCart}>
              <CloseIcon />
            </div>
          </div>
          {/* Content of cart */}
          <div className="p-10 border-b border-black">
            {
              cartItems.length > 0 && cartItems.map((cartItem) => (
                <CartElement
                  key={cartItem.product.id}
                  cartItem={cartItem}
                />
              ))
            }
          </div>
          <div className="p-10 border-b border-black flex md:flex-row gap-4 flex-col items-center justify-between">
            <p className="text-subtitle">Total</p>
            <p className="text-subtitle">{formatCurrency(total)}</p>
          </div>
          <div className="p-10 border-b border-black flex md:flex-row gap-4 flex-col items-center">
            <textarea className="w-full h-32" name="" id="" placeholder="Gift message">
            </textarea>
          </div>
          <div className="p-10 border-b border-black flex items-center text-center justify-center">
            <p className="text-caption">Shipping & taxes calculated at checkout
              Free standard shipping within Kyiv</p>
          </div>
          <div className="flex items-center text-center justify-center">
            <Button label="Check out" onSubmit={() => {
              router.push('/checkout');
            }} isFull={true} />
          </div>
        </div>
        {isCartOpen && <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-30" onClick={closeCart}></div>}
      </>
    </>
  );
};

export default memo(Cart);
