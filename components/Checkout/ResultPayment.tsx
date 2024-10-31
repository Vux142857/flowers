"use client";
import { useRouter } from "next/navigation";
import Button from "../common/Button";
import Checked from "../icons/Checked";
import { StatusOrder } from "@/services/client/order.service";
import Pending from "../icons/Pending";

interface ResultPaymentProps {
  status: StatusOrder;
}

const ResultPayment: React.FC<ResultPaymentProps> = ({ status }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
      <div className="text-center flex items-center flex-col">
        {status === StatusOrder.DONE ? (
          <>
            <Checked className="w-16 h-16 text-green-500 mb-4" />
            <h2 className="text-xl font-semibold text-green-600">Order Placed Successfully!</h2>
            <p className="text-gray-600">Thank you for your order! We will process it shortly.</p>
          </>
        ) : (
          <>
            <Pending className="w-16 h-16 text-yellow-500 mb-4 animate-spin" />
            <h2 className="text-xl font-semibold text-yellow-600">Order Pending</h2>
            <p className="text-gray-600">Your order is being processed. Please wait a moment.</p>
          </>
        )}
      </div>
      <Button label="Back to Home Page" onSubmit={handleGoBack} />
    </div>
  );
};

export default ResultPayment;
