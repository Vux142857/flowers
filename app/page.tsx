import CategorySection from "@/components/LandingPage/CategorySection";
import FourthSection from "@/components/LandingPage/FourthSection";
import ReviewSection from "@/components/LandingPage/ReviewSection";
import SecondSection from "@/components/LandingPage/SecondSection";
import ServiceSection from "@/components/LandingPage/ServiceSection";
import ThirdSection from "@/components/LandingPage/ThirdSection";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Content */}
      <CategorySection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <ServiceSection />
      <ReviewSection />
    </Layout>
  );
}
