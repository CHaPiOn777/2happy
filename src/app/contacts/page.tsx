import ContactsSection from "./components/ContactsSection/ContactsSection";
import HeaderSection from "./components/HeaderSection";
import MapSection from "./components/MapSection";

const ContactsPage = async () => {
  return (
    <>
      <HeaderSection />
      <ContactsSection />
      <MapSection />
    </>
  );
};

export default ContactsPage;
