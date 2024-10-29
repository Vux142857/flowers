'use client';

import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedTextProps {
  text: string;
  onClick?: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    initial: { y: "0%" },
    hover: { y: "-100%" },
  };

  const subVariants = {
    initial: { y: "100%" },
    hover: { y: "0%" },
  };

  return (
    <div
      className="relative h-8 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.div
        className="absolute w-full h-full z-20"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        variants={variants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="relative h-full">
          <span>{text}</span>
        </div>
      </motion.div>
      <motion.div
        className="absolute w-full h-full"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        variants={subVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="relative h-full">
          <span>{text}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedText;
