'use client';
import { useState, useEffect } from "react";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import ProductCardAlign from "../Category/ProductCardAlign";

interface ProductSliderProps {
  products: any[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);

    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const maxIndex = Math.max(0, products.length - slidesToShow);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 0
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
    (prevIndex < maxIndex + 1) ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="flex flex-row items-center overflow-hidden w-full">
      <div className="relative lg:w-1/12 w-1/6 flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10"
        >
          <LeftArrow />
        </button>
      </div>
      <div className="overflow-hidden w-4/6 lg:w-10/12">
        <div
          className="w-full flex transition-transform duration-500 ease-in-out flex-row gap-4"
          style={{
            transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
          }}
        >
          {products.map((product: any) => (
            <div
              key={product.id}
              className="flex flex-col items-start justify-center text-start w-full"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              <ProductCardAlign {...product} />
            </div>
          ))}
        </div>
      </div>
      <div className="relative lg:w-1/12 w-1/6 flex items-center justify-center">
        <button
          onClick={handleNext}
          className="absolute right-0 z-10"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
