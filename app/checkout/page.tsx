import LeftSection from "@/components/Checkout/LeftSection";
import RightSection from "@/components/Checkout/RightSection";
import Layout from "@/components/Layout/Layout";

const Checkout = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row border-t-[1px] border-black">
        <LeftSection />
        <RightSection />
      </div>
    </Layout>
  );
}

export default Checkout;