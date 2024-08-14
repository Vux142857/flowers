const Dots = ({ currentIndex, reviewsLength, onDotClick }: { currentIndex: number, reviewsLength: number, onDotClick: (index: number) => void }) => {
  return (
    <div className="flex gap-2 mt-4">
      {Array.from({ length: reviewsLength }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-black" : "bg-gray"
            }`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};

export default Dots;
