import { CheckoutItem } from "@/shared/types/other";
import { OrderProductItem } from "../types";

export const orderItemToCheckoutItem = (
  orderItem: OrderProductItem
): CheckoutItem => {
  const size =
    orderItem.meta_data.find((item) => item.key === "pa_size")?.display_value ??
    "";
  const color =
    orderItem.meta_data.find((item) => item.key === "pa_color")
      ?.display_value ?? "";
  return {
    id: orderItem.id,
    parentId: orderItem.product_id,
    name: orderItem.name,
    size,
    color,
    image: { ...orderItem.image, name: "", alt: "" },
    quantity: orderItem.quantity,
    regularPrice: "",
    price: `${orderItem.price}`,
    sumPrice: `${orderItem.price * orderItem.quantity}`,
    currencySymbol: "₸",
    salePrice: "",
  } satisfies CheckoutItem;
};
