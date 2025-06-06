import Container from "@/shared/components/UI/Container";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import CheckoutSide from "./components/CheckoutSide";

const CheckoutPage = () => {
  return (
    <Container className="my-section flex-col gap-12">
      <div className="flex flex-col gap-8">
        <h1 className="text-h2">Оформление заказа /</h1>
      </div>
      <div className="grid grid-cols-[288px_1fr] lg:grid-cols-[1fr_288px] gap-12">
        <CheckoutForm className="col-span-2 lg:col-span-1" />
        <CheckoutSide />
      </div>
    </Container>
  );
};

export default CheckoutPage;
