"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const IntersectionObserverEffect = () => {
  const pathName = usePathname();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    const initIntersectionObserver = () => {
      const elementsScrollRotate = document.querySelectorAll(".animate-on-scroll");
      const elementsScrollUp = document.querySelectorAll(".animate-on-scroll-up");

      elementsScrollRotate.forEach((el) => observer.observe(el));
      elementsScrollUp.forEach((el) => observer.observe(el));
    };

    initIntersectionObserver();

    return () => {
      const elementsScrollRotate = document.querySelectorAll(".animate-on-scroll");
      const elementsScrollUp = document.querySelectorAll(".animate-on-scroll-up");

      elementsScrollRotate.forEach((el) => observer.unobserve(el));
      elementsScrollUp.forEach((el) => observer.unobserve(el));

      observer.disconnect();
    };
  }, [pathName]);

  return null;
};

export default IntersectionObserverEffect;
