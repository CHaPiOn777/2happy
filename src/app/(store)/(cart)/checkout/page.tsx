import Container from "@/shared/components/UI/Container";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import CheckoutSide from "./components/CheckoutSide";
import { Suspense } from "react";

const CheckoutPage = () => {
  return (
    <Container className="my-section flex-col gap-12">
      <div className="flex flex-col gap-8">
        <h1 className="text-h2">Оформление заказа /</h1>
      </div>
      <div className="grid grid-cols-[1fr_288px] gap-x-12">
        <CheckoutForm />
        <CheckoutSide />
      </div>
    </Container>
  );
};

export default CheckoutPage;
