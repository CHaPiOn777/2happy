"use client";

import { useCart } from "../api/cartQueries";

const CartItemsCount = () => {
  const { data: cart } = useCart();

  if (!cart?.items_count) return null;

  return (
    <span className="absolute size-4 -top-1 -right-1 bg-red rounded-full text-white text-[12px]">
      {cart?.items_count}
    </span>
  );
};

export default CartItemsCount;
