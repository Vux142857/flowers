import Cart from "../Cart/Cart";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const desktopHeader = (
    <div className="hidden lg:flex flex-row justify-between font-medium border-[1px] border-black text-heading-5">
      <div className="flex flex-row items-center text-center">
        <div className="w-[180px] px-6 py-8 border-r-[1px] border-black cursor-pointer">Shop</div>
        <div className="w-[180px] px-6 py-8 border-r-[1px] border-black cursor-pointer">Contact</div>
      </div>
      <div className="flex flex-row items-center text-center">
        <div className="w-[180px] px-6 py-8 border-l-[1px] border-black cursor-pointer">Sign in</div>
        <Cart />
      </div>
    </div>
  )

  return (
    <div className="">
      {desktopHeader}
      <BurgerMenu />
    </div>
  );
}

export default Header;