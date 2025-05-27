import { sleep } from "@/sleep";
import OffertSection from "./components/OffertSection";
import PaymentPolicySection from "./components/PaymentPolicySection";

const OffertPage = async () => {
  if (process.env.NODE_ENV === "production") {
    await sleep(20000);
  }

  return (
    <div className="flex flex-col gap-12 my-section">
      <PaymentPolicySection />
      <OffertSection />
    </div>
  );
};

export default OffertPage;
