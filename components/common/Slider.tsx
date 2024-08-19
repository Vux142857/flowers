'use client';
import { useState, useEffect } from "react";
import ProductCard from "../Category/ProductCard";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";

interface ProductSliderProps {
  products: any[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // Mobile: 1 slide
      } else {
        setSlidesToShow(5); // Larger screens: 5 slides
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);

    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const maxIndex = products.length - slidesToShow;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : maxIndex
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="flex flex-row items-center overflow-hidden w-full">
      <div className="relative lg:w-1/12 w-1/4 flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10"
        >
          <LeftArrow />
        </button>
      </div>
      <div className="overflow-hidden w-2/4 lg:w-10/12">
        <div
          className="w-full flex transition-transform duration-500 ease-in-out flex-row gap-4"
          style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
        >
          {products.map((product: any) => (
            <div
              key={product.id}
              className={`flex flex-col items-start justify-center text-start gap-4 flex-shrink-0 w-full lg:w-1/5`}
            >
              <ProductCard {...product} isMain={false} />
              <h6 className="text-mobile-heading-6 lg:text-heading-6">{product.name}</h6>
              <p className="text-mobile-caption lg:text-caption font-bold text-gray">{product.price}$</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative lg:w-1/12 w-1/4 flex items-center justify-center">
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
