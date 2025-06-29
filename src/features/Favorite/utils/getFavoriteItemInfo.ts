import { FavoriteProduct } from "../types";

export const getFavoriteItemInfo = (favoriteItem: FavoriteProduct) => {
  const color =
    favoriteItem.attributes.find((item) => item.slug === "pa_color")?.option ??
    "";
  const size =
    favoriteItem.attributes.find((item) => item.slug === "pa_size")?.option ??
    "";

  const regularPrice = Number(favoriteItem.regular_price);
  const salePrice = Number(favoriteItem.sale_price);
  const isOnSale = favoriteItem.on_sale;
  const salePercent = isOnSale ? (salePrice / regularPrice) * 100 : 0;

  const stock_status = favoriteItem.stock_status;

  const quantity = favoriteItem.quantity;

  const sumPrice = isOnSale
    ? new Intl.NumberFormat("ru-RU").format(salePrice * quantity)
    : new Intl.NumberFormat("ru-RU").format(regularPrice * quantity);

  return {
    id: favoriteItem.id,
    image: favoriteItem.image,
    parentId: favoriteItem.parent_id,
    parentSlug: favoriteItem.parent_slug,
    variationId: favoriteItem.variationId,
    name: favoriteItem.name,
    size,
    color,
    quantity,
    stock_status,
    stock_quantity: favoriteItem.stock_quantity,
    regularPrice: new Intl.NumberFormat("ru-RU").format(regularPrice),
    salePrice: new Intl.NumberFormat("ru-RU").format(salePrice),
    sumPrice,
    salePercent,
    variation: {
      size,
      color,
    },
    isOnSale,
    currencySymbol: "₸",
    isInStock: stock_status === "instock",
  };
};
