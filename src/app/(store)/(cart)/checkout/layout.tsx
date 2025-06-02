"use client";

import { useCheckoutStore } from "@/features/Checkout/store/checkoutStore";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import CheckoutSimilarProducts from "./components/CheckoutSimilarProducts";

const CheckoutLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const { checkoutItems } = useCheckoutStore();

  useEffect(() => {
    console.log(checkoutItems, checkoutItems.length);
    if (!checkoutItems.length) router.replace("/");
  }, []);
  return (
    <>
      {children}
      <CheckoutSimilarProducts />
    </>
  );
};

export default CheckoutLayout;
