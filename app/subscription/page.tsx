import FirstSection from "@/components/Subscription/FirstSection";
import Layout from "@/components/Layout/Layout";
import SecondSection from "@/components/Subscription/SecondSection";
import ThirdSection from "@/components/Subscription/ThirdSection";
import FourthSection from "@/components/Subscription/FourthSection";

const Subscription = () => {
  return (
    <Layout>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Layout>
  );
}

export default Subscription;