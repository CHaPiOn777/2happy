import { Image } from "@/shared/types/api";
import { ProductVariation } from "../types";

export const getVariationsImages = (
  variations: ProductVariation[] | undefined,
  defaultImages: Image[]
) => {
  const imagesMap = new Map<number, Image[]>();

  if (!variations) return imagesMap;

  variations.forEach((item) => {
    const variationImages = item.image
      ? [item.image, ...item.woo_variation_gallery_images]
      : [];
    if (item.image) {
      imagesMap.set(item.id, variationImages);
    } else {
      imagesMap.set(item.id, defaultImages);
    }
  });

  return imagesMap;
};
