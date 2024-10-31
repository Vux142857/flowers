'use client';
import { useState } from "react";
import Button from "./Button";
interface WIPPopupProps {
  gate: React.ReactNode;
}
const WIPPopup: React.FC<WIPPopupProps> = ({ gate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {/* Button to open modal */}
      <div onClick={openModal}>
        {gate}
      </div>
      {/* Modal */}
      <div
        className={`fixed top-1/2 left-1/2 flex flex-col w-2/4 max-h-full bg-white shadow-lg z-50 border-black border-[1px] overflow-y-auto transform transition-transform duration-300 ease-out px-20 pt-20 pb-10 ${isModalOpen ? 'translate-x-[-50%] translate-y-[-50%] block' : 'translate-x-full hidden'} border-[1px] border-black shadow-lg gap-6  overflow-x-hidden`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center text-left">
          <h2 className="text-mobile-heading-2 lg:text-heading-2 text-xl">
            Welcome !
          </h2>
        </div>
        {/* Modal Body */}
        <span>This site was created for educational purposes to demonstrate design and functionality. Some features on this site are developing.</span>
        {/* Modal Footer */}
        <div className="flex justify-end gap-4">
          <Button label="Close" onSubmit={closeModal} />
        </div>
      </div>

      {/* Overlay */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 backdrop-blur-sm z-30"
          onClick={closeModal}
        ></div>
      )}
    </div>
  );
}

export default WIPPopup;

