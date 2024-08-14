'use client'
import { useState } from "react";
import Button, { ButtonType } from "../common/Button";
import GoogleReview from "../icons/GoogleReview";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import Dots from "../common/Dots";

const ReviewSection = () => {
  const mockData = [
    {
      review: "I love the flowers from Flower Shop! They are always fresh and beautiful. I have been a subscriber for 3 months now and I am very satisfied with the service.",
      name: "Jane Doe",
    },
    {
      review: "The delivery service is outstanding, and the quality of the flowers is top-notch. Highly recommended!",
      name: "John Smith",
    },
    {
      review: "Fantastic customer service and gorgeous arrangements. I'll definitely be back for more!",
      name: "Emily Johnson",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mockData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mockData.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center p-20 gap-16 justify-center">
      <div className="flex flex-col gap-6 items-center justify-center text-center">
        <GoogleReview />
        <p className="text-mobile-overline lg:text-overline">SERVICE</p>
        <h2 className="text-mobile-heading-2 lg:text-heading-2">Our Clients Say</h2>
        {/* Review of clients */}
        <div className="flex flex-row gap-6 items-center justify-between w-full">
          <div
            className="flex items-center cursor-pointer"
            onClick={handlePrevious}
          >
            <LeftArrow />
          </div>
          <div className="flex flex-col items-center justify-center text-center w-full h-full">
            <span className="text-mobile-subtitle lg:text-subtitle">
              &quot;{mockData[currentIndex].review}&quot;
            </span>
            <p>- {mockData[currentIndex].name}</p>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={handleNext}
          >
            <RightArrow />
          </div>
        </div>
        {/* Dots to indicate current review */}
        <Dots
          currentIndex={currentIndex}
          reviewsLength={mockData.length}
          onDotClick={handleDotClick}
        />
      </div>
      <Button label="Read reviews" type={ButtonType.Secondary} />
    </div>
  );
};

export default ReviewSection;
