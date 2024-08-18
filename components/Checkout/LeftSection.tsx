'use client';
import Link from "next/link";
import NavLeftSection from "./NavLeftSection";
import InforForm from "./InfoForm";
import ShippingDetail from "./ShippingDetail";
import { useEffect, useState } from "react";
import Payment from "./Payment";

const LeftSection = () => {
  const [currentStep, setCurrentStep] = useState<'information' | 'shipping' | 'payment'>('information');

  const [inforForm, setInfoForm] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [shippingDetail, setShippingDetail] = useState({
    recipientName: '',
    recipientPhone: '',
    deliveryDate: '',
    street: '',
    city: ''
  })

  const [paymentDetail, setPaymentDetail] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
  })

  const [isDoneInfo, setIsDoneInfo] = useState(false);
  const [isDoneShipDetails, setIsDoneShipDetails] = useState(false);
  const [isDonePayment, setIsDonePayment] = useState(false);

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfoForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetail(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetail(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  useEffect(() => {
    if (isDoneInfo) {
      setCurrentStep('shipping');
    }
    if (isDoneShipDetails) {
      setCurrentStep('payment');
    }
  }, [isDoneInfo, isDoneShipDetails, isDonePayment]);

  return (
    <div className="sticky flex flex-col px-20 py-10 border-r-[1px] border-black lg:w-1/2 gap-10">
      <NavLeftSection currentStep={currentStep} />
      <div className="bg-light-gray p-10">
        <span className="text-mobile-body lg:text-body">
          Already have an account? <Link className="underline" href={'/checkout'}>Log in</Link> for faster checkout
        </span>
      </div>
      <InforForm
        inforForm={inforForm}
        handleInfoChange={handleInfoChange}
        isDone={isDoneInfo}
        setIsDone={setIsDoneInfo}
      />
      <ShippingDetail
        shippingDetail={shippingDetail}
        handleShippingChange={handleShippingChange}
        isDisabled={!isDoneInfo}
        isDone={isDoneShipDetails}
        setIsDone={setIsDoneShipDetails}
      />
      <Payment
        shippingDetail={shippingDetail}
        handleShippingChange={handlePaymentChange}
        isDisabled={!isDoneShipDetails}
        isDone={isDonePayment}
        setIsDone={setIsDonePayment}
      />
    </div>
  );
}

export default LeftSection;
