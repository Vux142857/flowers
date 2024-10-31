import LeftSection from "@/components/Checkout/LeftSection";
import ResultPayment from "@/components/Checkout/ResultPayment";
import Layout from "@/components/Layout/Layout";
import { StatusOrder } from "@/services/client/order.service";

const CheckoutResult = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row border-t-[1px] border-black">
        <ResultPayment status={StatusOrder.PENDING} />
      </div>
    </Layout>
  );
}

export default CheckoutResult;