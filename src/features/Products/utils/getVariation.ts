import { ProductVariation } from "../types";

export const getVariation = (
  variations: ProductVariation[],
  color: string,
  size: string
) => {
  return (
    variations.find((item) => {
      const variationColor = item.attributes.find(
        (item) => item.slug === "pa_color"
      )?.option;
      const variationSize = item.attributes.find(
        (item) => item.slug === "pa_size"
      )?.option;

      return variationColor === color && variationSize === size;
    }) ?? null
  );
};
