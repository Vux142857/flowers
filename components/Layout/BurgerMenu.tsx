'use client'
import { useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";
import Instagram from "../icons/Instagram";
import Pinterest from "../icons/Pinterest";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Telegram from "../icons/Telegram";
import Cart from "../Cart/Cart";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  }

  const openMenu = () => {
    setIsOpen(true);
  }

  const handleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  const tabletHeader = (
    <div className="lg:hidden flex flex-row justify-between text-button font-medium border-[1px] border-black">
      <div onClick={handleMenu} className="w-14 h-14 flex items-center justify-center border-r-[1px] border-black cursor-pointer">
        <MenuIcon />
      </div>
      <Cart />
    </div>
  )
  return (
    <>
      {tabletHeader}
      <div className={`${isOpen ? 'fixed' : 'hidden'} z-40 top-0 left-0 flex flex-col border-[1px] border-black w-96 bg-white cursor-pointer text-mobile-heading-5`}>
        <div className="p-6 h-[73px] border-b-[1px] border-black" onClick={closeMenu}>
          <CloseIcon />
        </div>
        <div className="p-6 h-[73px] border-b-[1px] border-black hover:bg-black hover:text-white">Sign in</div>
        <div className="p-6 h-[73px] border-b-[1px] border-black hover:bg-black hover:text-white">Shop</div>
        <div className="p-6 h-[73px] border-b-[1px] border-black hover:bg-black hover:text-white">Service</div>
        <div className="p-6 h-[73px] border-b-[1px] border-black hover:bg-black hover:text-white">Contact</div>
        <div className="p-6 h-[73px] border-b-[1px] border-black hover:bg-black hover:text-white">About us</div>
        <div className="flex flex-col border-b-[1px] border-black gap-4 p-6">
          <a className="text-mobile-links hover:underline">Shipping & returns</a>
          <a className="text-mobile-links hover:underline">Terms & conditions</a>
          <a className="text-mobile-links hover:underline">Privacy policy</a>
        </div>
        <div className="flex flex-row p-6 justify-between">
          <Instagram />
          <Pinterest />
          <Facebook />
          <Twitter />
          <Telegram />
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-30" onClick={closeMenu}></div>
      )}
    </>
  );
}

export default BurgerMenu;