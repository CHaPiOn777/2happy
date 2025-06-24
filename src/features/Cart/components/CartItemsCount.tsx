"use client";

import { ComponentPropsWithoutRef } from "react";
import { useCart } from "../api/cartQueries";
import { cn } from "@/shared/utils";

const CartItemsCount = ({ className }: ComponentPropsWithoutRef<"span">) => {
  const { data: cart } = useCart();

  if (!cart?.items_count) return null;

  return (
    <span
      className={cn(
        "absolute -top-1 -right-1 bg-red rounded-full text-white text-[12px]",
        cart.items_count >= 10 ? "size-[18px]" : "size-4",
        className
      )}
    >
      {cart?.items_count}
    </span>
  );
};

export default CartItemsCount;
