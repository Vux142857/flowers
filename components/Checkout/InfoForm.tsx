'use client';
import { useState } from "react";
import Button from "../common/Button";
import InputText from "../common/Input";
import FillForm from "../icons/FillForm";
import Checked from "../icons/Checked";

interface InforFormProps {
  inforForm: {
    name: string;
    email: string;
    phone: string;
  };
  handleInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDone: boolean;
  setIsDone: (value: boolean) => void;
}

const InforForm: React.FC<InforFormProps> = ({
  inforForm,
  handleInfoChange,
  isDone,
  setIsDone
}) => {
  const [onClose, setOnClose] = useState(isDone);

  const handleSubmit = () => {
    Object.values(inforForm).map((value) => {
      if (value === '') {
        return;
      }
      setIsDone(true);
      setOnClose(true);
    })
  }

  return (
    <div className="flex flex-col gap-4 pb-6 border-b-[1px] border-light-gray">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1">
          {isDone ? <Checked /> : <p className="text-mobile-subtitle lg:text-subtitle">1</p>}
          <label htmlFor="Infomation-form" className="text-mobile-subtitle lg:text-subtitle">Information</label>
        </div>
        {isDone && <div className="cursor-pointer" onClick={(e) => { setOnClose(!onClose) }}><FillForm /></div>}
      </div>
      <div className={`flex flex-col gap-4 ${onClose ? 'hidden' : ''}`}>
        <InputText name="name" isRequired={true} placeholder="Your Name" value={inforForm.name} setValue={handleInfoChange} isFullWidth={true}/>
        <InputText name="email" isRequired={true} placeholder="Your Email" value={inforForm.email} setValue={handleInfoChange} isFullWidth={true} />
        <InputText name="phone" isRequired={true} placeholder="Your Phone number" value={inforForm.phone} setValue={handleInfoChange} isFullWidth={true} />
        <Button label="Continue to shipping" onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default InforForm;