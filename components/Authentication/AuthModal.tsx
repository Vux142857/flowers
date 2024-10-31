'use client';

import { useState } from "react";
import AnimatedText from "../common/AnimatedText";
import SeparateOr from "../icons/SeparateOr";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignInUpWithGoogle from "./SignInUpWithGoogle";
import { signOut } from "next-auth/react";
import useCart from "@/hooks/useCart";

interface AuthModalProps {
  session?: any;
}

const AuthModal: React.FC<AuthModalProps> = ({ session }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const { clearCart } = useCart();
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSignOut = async () => {
    await signOut({
      redirect: false,
      callbackUrl: '/',
    });
    clearCart();
    window.location.href = '/';
  }

  return (
    <>
      {/* Button to open modal */}
      <div
        className="w-1/2 hidden lg:block px-6 py-8 border-l-[1px] border-black cursor-pointer"
      >
        {(!session || session?.error) ? <AnimatedText text='Sign in' onClick={openModal} /> : <AnimatedText text='Sign out' onClick={handleSignOut} />}
      </div>

      {/* Modal */}
      <>
        <div
          className={`fixed top-1/2 left-1/2 flex flex-col w-2/4 max-h-full bg-white shadow-lg z-50 border-black border-[1px] overflow-y-auto transform transition-transform duration-300 ease-out px-20 pt-20 pb-10 ${isModalOpen ? 'translate-x-[-50%] translate-y-[-50%] block' : 'translate-x-full hidden'} border-[1px] border-black shadow-lg gap-6  overflow-x-hidden`}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center text-left">
            <h2 className="text-mobile-heading-2 lg:text-heading-2">{
              isSignIn ? 'Sign in' : 'Greetings! Welcome to luxury gift shop.'
            }</h2>
          </div>

          {/* Modal Body */}
          {/* Sign In */}
          {
            isSignIn ? (
              <SignIn />
            ) : (
              <SignUp />
            )
          }
          <div className="w-full items-center flex flex-col gap-4">
            {isSignIn && <p onClick={() => setIsSignIn(!isSignIn)} className="underline text-mobile-heading-6 lg:text-heading-6 hover:cursor-pointer">Sign up if u don&apos;t have account</p>}
            {!isSignIn && <p onClick={() => setIsSignIn(!isSignIn)} className="underline text-mobile-heading-6 lg:text-heading-6 hover:cursor-pointer">Sign in if u have account</p>}
            <SeparateOr />
          </div>
          <SignInUpWithGoogle />
        </div>

        {/* Overlay */}
        {isModalOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 backdrop-blur-sm z-30"
            onClick={closeModal}
          ></div>
        )}
      </>
    </>
  );
};

export default AuthModal;
