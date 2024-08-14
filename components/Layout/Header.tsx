import Cart from "../Cart/Cart";
import AnimatedText from "../common/AnimatedText";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const desktopHeader = (
    <div className="hidden lg:flex flex-row justify-between font-medium text-heading-5">
      <div className="flex flex-row items-center text-center w-1/4">
        <div className="w-1/2 px-6 py-8 border-r-[1px] border-black cursor-pointer">
          <AnimatedText text='Shop' />
        </div>
        <div className="w-1/2 px-6 py-8 border-r-[1px] border-black cursor-pointer">
          <AnimatedText text='Contact' />
        </div>
      </div>
      <div className="flex flex-row items-center text-center w-1/4">
        <div className="w-1/2 px-6 py-8 border-l-[1px] border-black cursor-pointer">
          <AnimatedText text='Sign in' />
        </div>
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