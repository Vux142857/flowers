'use client';
import { useState } from "react";
import Button from "../common/Button";
import DatePicker from "../common/DatePicker";
import InputText from "../common/Input";
import Checked from "../icons/Checked";
import FillForm from "../icons/FillForm";
import orderService, { IOrder, PaymentMethod, StatusOrder } from "@/services/client/order.service";
import useCart from "@/hooks/useCart";
import toast from "react-hot-toast";

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
  const { cartItems } = useCart();
  const [onClose, setOnClose] = useState(!isDisabled);
  const [paymentMethod, setPaymentMethod] = useState(PaymentMethod.COD);
  const [note, setNote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [order, setOrder] = useState<IOrder>({
    paymentMethod: PaymentMethod.COD,
    total: 0,
    statusOrder: StatusOrder.PENDING,
    orderItems: cartItems,
    fullName: shippingDetail.recipientName,
    phone: shippingDetail.recipientPhone,
    address: `${shippingDetail.street}, ${shippingDetail.city}`,
    note: note,
  })


  const handleSubmit = async () => {
    if (!Object.values(shippingDetail).every(value => value !== '')) {
      toast.error("Please fill in all shipping details");
      return;
    }
    setIsLoading(true);
    try {
      console.log("Order:", order);
      const response = await orderService.postOrder(order);
      console.log("Order created:", response);
      setIsDone(true);
    } catch (error) {
      console.error("Failed to create order:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value as PaymentMethod);
  }
  return isLoading ? (<div> Is loading</div>) : (
    <div className="flex flex-col gap-4 pb-6 border-b-[1px] border-light-gray">
      <div className="flex flex-row justify-between items-center">
        <div className={`flex flex-row gap-1 ${isDisabled ? 'text-light-gray' : ''}`}>
          {isDone ? <Checked /> : <p className="text-mobile-subtitle lg:text-subtitle">3</p>}
          <label htmlFor="Infomation-form" className="text-mobile-subtitle lg:text-subtitle">Payment</label>
        </div>
        {isDone && <div className="cursor-pointer" onClick={(e) => { setOnClose(!onClose) }}><FillForm /></div>}
      </div>
      {!isDisabled && <div className={`${onClose ? 'hidden' : ''} flex flex-col gap-4`}>
        <InputText name="cardNumber" placeholder="Recipients Name" value={shippingDetail.recipientName} isRequired={true} setValue={() => { }} isDisabled={true} />
        <InputText name="recipientPhone" placeholder="Recipients Phone Number*" isRequired={true} value={shippingDetail.recipientPhone} setValue={() => { }} isDisabled={true} />
        <DatePicker name="deliveryDate" placeholder="Delivery Date" value={shippingDetail.deliveryDate} setValue={() => { }} isDisabled={true} />
        <div className="flex flex-row gap-3">
          <InputText name="street" placeholder="Street" value={shippingDetail.street} isRequired={true} setValue={() => { }} isDisabled={true} />
          <InputText name="city" placeholder="City" value={shippingDetail.city} isRequired={true} setValue={() => { }} isDisabled={true} />
          {/* input for Note */}
        </div>
        <InputText isFullWidth={true} name="note" placeholder="Note" value={note} setValue={(e: any) => { setNote(e.target.value) }} />
        {/* Payment method */}
        <select name="paymentMethod" id="paymentMethod" className="w-full h-12 border-[1px] border-gray" onChange={handlePaymentChange}>
          <option value={PaymentMethod.COD}>COD</option>
          <option value={PaymentMethod.ZALOPAY}>Zalo Pay</option>
        </select>
        <Button label="Continue to payment" onSubmit={handleSubmit} />
      </div>}
    </div>
  )
}

export default Payment;