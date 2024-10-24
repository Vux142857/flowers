import { IProduct } from "@/services/client/product.service";
import AddToCart from "./AddToCart";

interface RightSectionProps {
  productDetail: IProduct;
  combineProducts: IProduct[];
}
const RightSection: React.FC<RightSectionProps> = ({ productDetail, combineProducts }) => {
  return (
    <div className="flex flex-col lg:w-1/2 border-t-[1px] border-black p-10 gap-10">
      {/* Nav */}
      <div className="flex flex-row items-center justify-start gap-1">
        <p className="text-mobile-overline lg:text-overline">{productDetail.category?.name}</p>
        <p className="text-mobile-overline lg:text-overline">/</p>
        <p className="text-mobile-overline lg:text-overline text-gray">{productDetail.name}</p>
      </div>
      {/* Name && Description */}
      <div className="flex flex-col items-start justify-center text-start gap-4">
        <h3 className="text-mobile-heading-3 lg:text-heading-3">{productDetail.name}</h3>
        <span className="text-mobile-body lg:text-body">{productDetail.description}</span>
      </div>
      {/* ********************************Add to Cart */}
      <AddToCart productDetail={productDetail} combineProducts={combineProducts} />
    </div>
  );
}

export default RightSection;