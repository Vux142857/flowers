import Button from "../common/Button";
import Counter from "../common/Counter";
import ProductSlider from "../common/Slider";
import PriceOptions from "./PriceOption";

interface RightSectionProps {
  productDetail: any;
  combineProducts: any[];
}
const RightSection: React.FC<RightSectionProps> = ({ productDetail, combineProducts }) => {
  return (
    <div className="flex flex-col lg:w-1/2 border-t-[1px] border-black p-10 gap-10">
      {/* Nav */}
      <div className="flex flex-row items-center justify-start gap-1">
        <p className="text-mobile-overline lg:text-overline">{productDetail.category}</p>
        <p className="text-mobile-overline lg:text-overline">/</p>
        <p className="text-mobile-overline lg:text-overline text-gray">{productDetail.name}</p>
      </div>
      {/* Name && Description */}
      <div className="flex flex-col items-start justify-center text-start gap-4">
        <h3 className="text-mobile-heading-3 lg:text-heading-3">{productDetail.name}</h3>
        <span className="text-mobile-body lg:text-body">{productDetail.description}</span>
      </div>
      {/* Quantity */}
      <div className="flex flex-row items-center gap-4">
        <p className="text-mobile-subtitle lg:text-subtitle">Quantity</p>
        <Counter />
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
      <PriceOptions />
      {/* Button */}
      <Button label="Add to cart" />
    </div>
  );
}

export default RightSection;