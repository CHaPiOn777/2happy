import {
  ProductDefaultVariation,
  ProductServer,
  ProductVariation,
} from "@/features/Products/types";
import { FavoriteProduct } from "../types";

export const createFavorite = (
  product: ProductServer,
  variation: ProductVariation | ProductDefaultVariation
): FavoriteProduct => {
  return {
    id: variation.id,
    name: product.name,
    on_sale: variation.on_sale,
    parent_slug: product.slug,
    variationId: variation.id,
    parent_id: product.id,
    price: variation.price,
    attributes: variation.attributes,
    tags: product.tags,
    regular_price: variation.regular_price,
    sale_price: variation.sale_price,
    stock_status: variation.stock_status,
    stock_quantity: variation.stock_quantity,
    quantity: 1,
    image: variation.image,
  };
};
