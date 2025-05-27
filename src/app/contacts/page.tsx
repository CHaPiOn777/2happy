import { sleep } from "@/sleep";
import ContactsSection from "./components/ContactsSection/ContactsSection";
import HeaderSection from "./components/HeaderSection";
import MapSection from "./components/MapSection";

const ContactsPage = async () => {
  if (process.env.NODE_ENV === "production") {
    await sleep(50000);
  }

  return (
    <>
      <HeaderSection />
      <ContactsSection />
      <MapSection />
    </>
  );
};

export default ContactsPage;
