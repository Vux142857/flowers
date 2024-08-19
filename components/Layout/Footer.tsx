'use client'
import Button from "../common/Button";
import InputText from "../common/Input";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Pinterest from "../icons/Pinterest";
import Telegram from "../icons/Telegram";
import Twitter from "../icons/Twitter";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="col-span-1 flex flex-col gap-6 p-10 border-[0.5px] border-black h-[429px]">
        <p>Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
        <InputText placeholder="Enter your email" value="" setValue={() => { }} />
        <Button label="Remind" onSubmit={() => { }} />
      </div>
      <div className="col-span-1 flex flex-col gap-6 p-10 border-[0.5px] border-black h-[429px]">
        <h5 className="text-heading-5 text-gray">Contact Us</h5>
        <div className="flex flex-col gap-2">
          <p className="text-caption text-gray">Address</p>
          <a href="/" className="text-links">15/4 Khreshchatyk Street, Kyiv</a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-caption text-gray">Phone</p>
          <a href="/" className="text-links">+380980099777</a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-caption text-gray">Email</p>
          <a href="/" className="text-links">Kiev.Florist.Studio@gmail.com</a>
        </div>
        <div className="flex flex-col gap-6 justify-between">
          <h5 className="text-heading-5 text-gray">Follow Us</h5>
          <div className="flex flex-row gap-6 justify-between">
            <Instagram />
            <Pinterest />
            <Facebook />
            <Twitter />
            <Telegram />
          </div>
        </div>
        <div></div>
      </div>
      <div className="col-span-1 flex flex-col gap-6 p-10 border-[0.5px] border-black h-[429px]">
        <h5 className="text-heading-5 text-gray">Shop</h5>
        <div className="flex flex-col gap-2">
          <a href="/" className="text-links">All Products</a>
          <a href="/" className="text-links">Fresh Flowers</a>
          <a href="/" className="text-links">Fresh Flowers</a>
          <a href="/" className="text-links">Fresh Flowers</a>
        </div>
        <h5 className="text-heading-5 text-gray">Services</h5>
        <div className="flex flex-col gap-2">
          <a href="/" className="text-links">Flower Subcription</a>
          <a href="/" className="text-links">Wedding & Event Decor</a>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6 p-10 border-[0.5px] border-black h-[429px]">
        <h5 className="text-heading-5 text-gray">About Us</h5>
        <div className="flex flex-col gap-2">
          <a href="/" className="text-links">Our story</a>
          <a href="/" className="text-links">Blog</a>
        </div>
        <div className="flex flex-col gap-2">
          <a href="/" className="text-links">Shipping & returns</a>
          <a href="/" className="text-links">Terms & conditions</a>
          <a href="/" className="text-links">Privacy policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;