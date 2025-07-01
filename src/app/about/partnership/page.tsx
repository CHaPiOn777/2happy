import WhatsAppButton from "@/shared/components/Layout/MainLayout/components/WhatsAppButton";
import Main from "./components/Main/Main";
import SuggestSection from "./components/SuggestSection/SuggestSection";
import DividerSection from "./components/DividerSection";
import LoyalSection from "./components/LoyalSection/LoyalSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import Instagram from "@/shared/components/Layout/Instagram/Instagram";

const PartnershipPage = async () => {
  return (
    <>
      <Main />
      <SuggestSection />
      <DividerSection />
      <LoyalSection />
      <WhyChooseUsSection />
      <ContactUsSection />
      <Instagram />
      <WhatsAppButton />
    </>
  );
};

export default PartnershipPage;
