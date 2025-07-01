import { CheckoutItem } from "@/shared/types/other";
import { CartItemResponse } from "../types";
import { getCartItemInfo } from "./getCartItemInfo";

export const cartItemToCheckoutItem = (
  cartItem: CartItemResponse
): CheckoutItem => {
  const {
    name,
    size,
    color,
    image,
    quantity,
    regularPrice,
    sumPrice,
    price,
    currencySymbol,
    salePrice,
  } = getCartItemInfo(cartItem);

  return {
    id: cartItem.id,
    parentId: cartItem.parent_id,
    name,
    size,
    color,
    image,
    quantity,
    regularPrice,
    price,
    sumPrice,
    currencySymbol,
    salePrice,
  } satisfies CheckoutItem;
};
