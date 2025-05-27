import { ProductVariation } from "@/features/Products/types";
import { notify } from "@/shared/lib/notify";
import { CheckoutItem } from "@/shared/types/other";
import { OrderResponse } from "../types";

export const repeatOrder = (
  order: OrderResponse,
  variations: ProductVariation[]
) => {
  const checkoutItems: CheckoutItem[] = [];

  const productsToLoop = variations ?? [];

  for (const product of productsToLoop) {
    const orderItem = order.line_items.find(
      (orderItem) => orderItem.variation_id === product.id
    );

    const color =
      product.attributes.find((item) => item.slug === "pa_color")?.name ?? "";
    const size =
      product.attributes.find((item) => item.slug === "pa_size")?.name ?? "";

    if (!orderItem) continue;

    if (product.stock_status === "outofstock") {
      notify({
        message: `Товара ${product.name} (Цвет: ${color}; Размер: ${size}) нет в наличии`,
      });
      break;
    }
    if (product.stock_quantity && orderItem.quantity > product.stock_quantity) {
      notify({
        message: `Товара ${product.name} (Цвет: ${color}; Размер: ${size}) нет в таком количестве`,
      });
      break;
    }

    checkoutItems.push({
      id: product.id,
      name: product.name,
      parentId: product.parent_id,
      size,
      color,
      quantity: orderItem.quantity,
      image: product.image,
      regularPrice: product.regular_price,
      price: product.price,
      salePrice: product.sale_price,
      sumPrice: `${Number(product.price) * orderItem.quantity}`,
      currencySymbol: "₸",
    });
  }

  console.log(checkoutItems);

  return checkoutItems;
};
