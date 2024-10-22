'use client';

import { useState } from "react";
import AnimatedText from "../common/AnimatedText";
import CloseIcon from "../icons/CloseIcon";

const AuthModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  return ( 
    <>
      <div className="w-1/2 hidden lg:block px-6 py-8 border-l-[1px] border-black cursor-pointer" onClick={openModal}><AnimatedText text="Sign in" /></div>
      <>
        <div className={`fixed top-1/2 right-1/2 flex flex-col w-2/4 max-h-full bg-white shadow-lg z-50 border-black border-[1px] overflow-y-auto transform transition-transform duration-800 ease-out ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-row px-10 py-4 justify-between items-center border-b border-black">
            <h6 className="text-heading-6">Shopping cart</h6>
            <div className="cursor-pointer flex items-center" onClick={closeModal}>
              <CloseIcon />
            </div>
          </div>
          {/* Content of cart */}
          <div className="p-10 border-b border-black">
          </div>
          <div className="p-10 border-b border-black flex md:flex-row gap-4 flex-col items-center justify-between">
            <p className="text-subtitle">Subtotal</p>
            <p className="text-subtitle">$100.00</p>
          </div>
          <div className="p-10 border-b border-black flex md:flex-row gap-4 flex-col items-center">
            <textarea className="w-full h-32" name="" id="" placeholder="Gift message">
            </textarea>
          </div>
          <div className="p-10 border-b border-black flex items-center text-center justify-center">
            <p className="text-caption">Shipping & taxes calculated at checkout
              Free standard shipping within Kyiv</p>
          </div>

        </div>
        {isModalOpen && <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-30" onClick={closeModal}></div>}
      </>
    </>
   );
}
 
export default AuthModal;