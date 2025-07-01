"use client";

import { useCheckoutStore } from "@/features/Checkout/store/checkoutStore";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import CheckoutSimilarProducts from "./components/CheckoutSimilarProducts";
import { useCart } from "@/features/Cart/api/cartQueries";
import { cartItemToCheckoutItem } from "@/features/Cart/utils/cartItemToCheckoutItem";

const CheckoutLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const { checkoutItems, setCheckoutItems } = useCheckoutStore();
  const { data: cart, isPending } = useCart();

  useEffect(() => {
    if (!checkoutItems.length) {
      const checkoutCartItems = cart?.items.map(cartItemToCheckoutItem) ?? [];

      if (!isPending && !checkoutCartItems?.length) router.replace("/");
      else {
        setCheckoutItems(checkoutCartItems);
      }
    }
  }, [cart]);
  return (
    <>
      {children}
      <CheckoutSimilarProducts />
    </>
  );
};

export default CheckoutLayout;
