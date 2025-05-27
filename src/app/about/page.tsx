import DividerSection from "./components/DividerSection";
import AboutSection from "./components/AboutSection";
import Main from "./components/Main";
import OurValues from "./components/OurValues";
import Instagram from "./components/Instagram";
import PartnersSection from "./components/PartnersSection";
import ProductsSection from "./components/ProductsSection";
import StatisticSection from "./components/StatisticSection";
import HistorySection from "./components/HistorySection";
import ReviewsSection from "./components/ReviewsSection";
import WhatsAppButton from "@/shared/components/Layout/MainLayout/components/WhatsAppButton";
import { sleep } from "@/sleep";

const AboutPage = async () => {
  if (process.env.NODE_ENV === "production") {
    await sleep(35000);
  }
  return (
    <>
      <Main />
      <AboutSection />
      <OurValues />
      <DividerSection />
      <HistorySection />
      <ProductsSection />
      <StatisticSection />
      <ReviewsSection />
      <Instagram />
      <PartnersSection />
      <WhatsAppButton />
    </>
  );
};

export default AboutPage;
