import { sortCategories } from "@/features/Products/utils/sortCategories";
import { CartItemResponse } from "../types";
import { getPriceWithMinors } from "./getPriceWithMinors";
import { decodeHtmlEntities } from "@/shared/utils/decodeHtmlEl";

export const getCartItemInfo = (cartItem: CartItemResponse) => {
  const size =
    cartItem.variation.find((item) => item.attribute === "Размер")?.value ?? "";
  const color =
    cartItem.variation.find((item) => item.attribute === "Цвет")?.value ?? "";

  const regularPrice = Number(cartItem.prices.regular_price);
  const salePrice = Number(cartItem.prices.sale_price);
  const isOnSale = regularPrice != salePrice;
  const salePercent = isOnSale ? (salePrice / regularPrice) * 100 : 0;

  const stock_status = cartItem.stock_status;

  const quantity = cartItem.quantity;

  const sumPrice = isOnSale
    ? new Intl.NumberFormat("ru-RU").format(
        getPriceWithMinors(
          salePrice * quantity,
          cartItem.prices.currency_minor_unit
        )
      )
    : new Intl.NumberFormat("ru-RU").format(
        getPriceWithMinors(
          regularPrice * quantity,
          cartItem.prices.currency_minor_unit
        )
      );

  return {
    key: cartItem.key,
    id: cartItem.id,
    parentId: cartItem.parent_id,
    image: cartItem.images[0],
    name: decodeHtmlEntities(cartItem.name),
    size,
    color,
    quantity,
    stock_status,
    stock_quantity: cartItem.stock_quantity,
    sku: cartItem.sku,
    categories: sortCategories(cartItem.product_categories),
    price: new Intl.NumberFormat("ru-RU").format(
      getPriceWithMinors(
        cartItem.prices.price,
        cartItem.prices.currency_minor_unit
      )
    ),
    regularPrice: new Intl.NumberFormat("ru-RU").format(
      getPriceWithMinors(regularPrice, cartItem.prices.currency_minor_unit)
    ),
    salePrice: new Intl.NumberFormat("ru-RU").format(
      getPriceWithMinors(salePrice, cartItem.prices.currency_minor_unit)
    ),
    sumPrice,
    salePercent,
    variation: {
      size: cartItem.variation.find((item) => item.attribute === "Размер")
        ?.value,
      color: cartItem.variation.find((item) => item.attribute === "Цвет")
        ?.value,
    },
    currencySymbol: cartItem.prices.currency_symbol,
    isOnSale,
    isInStock: stock_status === "instock",
  };
};
