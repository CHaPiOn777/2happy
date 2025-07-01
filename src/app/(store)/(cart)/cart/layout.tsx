import { ReactNode } from "react";
import CartSimilarProducts from "./components/CartSimilarProducts";

const CartLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <CartSimilarProducts />
    </>
  );
};

export default CartLayout;
