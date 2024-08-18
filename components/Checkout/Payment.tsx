'use client';
import { useState } from "react";
import Button from "../common/Button";
import DatePicker from "../common/DatePicker";
import InputText from "../common/Input";
import Checked from "../icons/Checked";
import FillForm from "../icons/FillForm";

interface PaymentProps {
  shippingDetail: {
    recipientName: string;
    recipientPhone: string;
    deliveryDate: string;
    street: string;
    city: string;
  };
  handleShippingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
  isDone: boolean;
  setIsDone: (value: boolean) => void;
}

const Payment: React.FC<PaymentProps> = (
  {
    shippingDetail,
    handleShippingChange,
    isDisabled,
    isDone,
    setIsDone
  }
) => {
  const [onClose, setOnClose] = useState(!isDisabled);
  const handleSubmit = () => {
    Object.values(shippingDetail).map((value) => {
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
        <div className={`flex flex-row gap-1 ${isDisabled ? 'text-light-gray' : ''}`}>
          {isDone ? <Checked /> : <p className="text-mobile-subtitle lg:text-subtitle">3</p>}
          <label htmlFor="Infomation-form" className="text-mobile-subtitle lg:text-subtitle">Payment</label>
        </div>
        {isDone && <div className="cursor-pointer" onClick={(e) => { setOnClose(!onClose) }}><FillForm /></div>}
      </div>
      {!isDisabled && <div className={`${onClose ? 'hidden' : ''} flex flex-col gap-4`}>
        <InputText name="cardNumber" placeholder="Recipients Name" value={shippingDetail.recipientName} isRequired={true} setValue={handleShippingChange} />
        <InputText name="recipientPhone" placeholder="Recipients Phone Number*" isRequired={true} value={shippingDetail.recipientPhone} setValue={handleShippingChange} />
        <DatePicker name="deliveryDate" placeholder="Delivery Date" value={shippingDetail.deliveryDate} setValue={handleShippingChange} />
        <div className="flex flex-row gap-3">
          <InputText name="street" placeholder="Street" value={shippingDetail.street} isRequired={true} setValue={handleShippingChange} />
          <InputText name="city" placeholder="City" value={shippingDetail.city} isRequired={true} setValue={handleShippingChange} />
        </div>
        <Button label="Continue to payment" onSubmit={handleSubmit} />
      </div>}
    </div>
  );
}

export default Payment;