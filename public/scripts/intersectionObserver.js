function initIntersectionObserver() {
  const elementsScrollRotate = document.querySelectorAll(".animate-on-scroll");
  const elementsScrollUp = document.querySelectorAll(".animate-on-scroll-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  });

  if (elementsScrollRotate?.length > 0)
    elementsScrollRotate.forEach((el) => observer.observe(el));
  if (elementsScrollUp?.length > 0)
    elementsScrollUp.forEach((el) => observer.observe(el));
}

initIntersectionObserver();
