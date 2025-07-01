import { CheckoutItem } from "@/shared/types/other";
import { ProductVariation } from "../types";

export const variationToCheckoutItem = (
  variation: ProductVariation
): CheckoutItem => {
  return {
    id: variation.id,
    parentId: variation.parent_id,
    name: variation.name,
    size:
      variation.attributes.find((item) => item.slug === "pa_size")?.option ??
      "",
    color:
      variation.attributes.find((item) => item.slug === "pa_color")?.option ??
      "",
    image: variation.image,
    quantity: 1,
    regularPrice: variation.regular_price,
    sumPrice: variation.price,
    price: variation.price,
    salePrice: variation.sale_price,
    currencySymbol: "₸",
  } satisfies CheckoutItem;
};
