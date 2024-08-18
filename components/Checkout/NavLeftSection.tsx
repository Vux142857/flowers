const NavLeftSection = () => {
  return (
    <div className="flex flex-row gap-3 items-center justify-start">
      <div className="flex flex-row gap-2 items-center">
        <p className="text-mobile-overline lg:text-overline">INFORMATION</p>
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1.5L1 0.5L5 4.5L6 5.5L5 6.5L1 10.5L0 9.5L4 5.5" fill="#121212" />
        </svg>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <p className="text-mobile-overline lg:text-overline">SHIPPING</p>
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1.5L1 0.5L5 4.5L6 5.5L5 6.5L1 10.5L0 9.5L4 5.5" fill="#121212" />
        </svg>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <p className="text-mobile-overline lg:text-overline">PAYMENT</p>
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1.5L1 0.5L5 4.5L6 5.5L5 6.5L1 10.5L0 9.5L4 5.5" fill="#121212" />
        </svg>
      </div>
    </div>
  );
}

export default NavLeftSection;