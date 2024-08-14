'use client';
import { useState } from "react";
import InputText from "../common/Input";
import Button from "../common/Button";
import Phone from "../icons/Phone";
import Address from "../icons/Address.";
import Shop from "../../public/landingpage/section4/shop.png"
import Image from "next/image";
import Instagram from "../icons/Instagram";
import Pinterest from "../icons/Pinterest";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Telegram from "../icons/Telegram";

const FourthSection = () => {
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="lg:h-1/2 flex flex-col gap-6 p-8 md:p-20 border-t-[1px] border-r-[1px] border-black justify-between">
          <h2 className="text-mobile-heading-2 lg:text-heading-2">Let&apos;s Talk</h2>
          <p className="text-mobile-body lg:text-body">
            Enter your number and we&apos;ll call you back ASAP to help you with any questions or to place an order
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <InputText placeholder="+84" value={value} setValue={setValue} />
            <Button label="Book a call" onClick={() => { }} />
          </div>
        </div>
        <div className="lg:h-1/2 flex flex-row items-center border-t-[1px] border-r-[1px] border-black">
          <div className="flex flex-col items-center w-1/2 lg:h-full h-72 border-r-[1px] border-black">
            <div className="h-1/6 border-b-[1px] border-black w-full">
              <h3 className="text-mobile-heading-3 lg:text-heading-3 pt-4 text-center">Phone</h3>
            </div>
            <div className="h-5/6 flex flex-col text-center justify-center items-center gap-4 py-2">
              <div className="flex flex-row gap-4">
                <Phone />
                <p className="font-semibold">+380980099777</p>
              </div>
              <div className="flex flex-row gap-4">
                <Phone />
                <p className="font-semibold">+380980099777</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/2 lg:h-full h-72">
            <div className="h-1/6 border-b-[1px] border-black w-full">
              <h3 className="text-mobile-heading-3 lg:text-heading-3 pt-4 text-center">Address</h3>
            </div>
            <div className="h-5/6 flex flex-col text-center justify-center items-center gap-4 py-2">
              <div className="flex flex-row gap-4">
                <p>Opening hours: 8 to 11 p.m.</p>
              </div>
              <div className="flex flex-row gap-4">
                <Address />
                <p className="font-semibold">15/4 Khreshchatyk Street, Kyiv</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="flex-grow h-[50vh] lg:h-[75vh] w-full overflow-hidden">
          <Image src={Shop} alt="Flower shop" className="cursor-pointer object-cover transition-transform duration-300 hover:scale-110 w-full h-full" />
        </div>
        <div className="h-[10vh] lg:h-[15vh] w-full flex flex-row items-center justify-center text-center border-t-[1px] border-black">
          <div className="h-full w-1/2 border-r-[1px] border-black flex justify-center items-center">
            <h3 className="text-mobile-heading-3 lg:text-heading-3">Follow us</h3>
          </div>
          <div className="flex flex-row gap-6 justify-center w-1/2">
            <Instagram />
            <Pinterest />
            <Facebook />
            <Twitter />
            <Telegram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
