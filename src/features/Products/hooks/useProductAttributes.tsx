import { useEffect, useMemo, useState } from "react";
import { getAttributesByProductPrice } from "../utils/getAttributesByProductPrice";
import { getVariation, getVariationsImages } from "../utils";
import { ProductServer, ProductVariation } from "../types";
import { createColorToSizeMap } from "../utils/getProductVariationOptions";
import { Image } from "@/shared/types/api";

export type TProductAttributesHandler = (params: {
  type: "size" | "color";
  value: string;
}) => void;

export const useProductAttributes = ({
  data,
  variations,
  defaultColor,
  defaultSize,
  handleChange,
  setImages,
}: {
  data: ProductServer;
  variations: ProductVariation[] | undefined;
  defaultColor?: string | null;
  defaultSize?: string | null;

  handleChange?: TProductAttributesHandler;
  setImages?: (images: Image[]) => void;
}) => {
  const { size: productDefaultSize, color: productDefaultColor } =
    getAttributesByProductPrice(data, variations);

  const [color, setColor] = useState(productDefaultColor);
  const [size, setSize] = useState(productDefaultSize);
  const [variation, setVariation] = useState<ProductVariation | null>(null);

  const imagesMap = useMemo(
    () => getVariationsImages(variations, data.images),
    [variations]
  );

  const colorToSizeMap = useMemo(
    () => createColorToSizeMap(variations),
    [variations]
  );

  const availableSizes = useMemo(() => {
    return colorToSizeMap.get(color) ?? [];
  }, [color, colorToSizeMap]);

  const handleColorChange = (newColor: string) => {
    const newVariation = getVariation(variations ?? [], newColor, size);

    setColor(newColor);
    setVariation(newVariation);

    const variationImages = newVariation?.id
      ? imagesMap.get(newVariation?.id)
      : [];
    if (variationImages?.length && setImages) setImages(variationImages);

    const availableSizesForColor = colorToSizeMap.get(newColor);
    if (availableSizesForColor && !availableSizesForColor.includes(size)) {
      setSize(availableSizesForColor[0]);
    }

    handleChange?.({ type: "color", value: newColor });
  };

  const handleSizeChange = (newSize: string) => {
    const newVariation = getVariation(variations ?? [], color, newSize);

    setSize(newSize);
    setVariation(newVariation);

    handleChange?.({ type: "size", value: newSize });
  };

  useEffect(() => {
    const size = defaultSize || productDefaultSize;
    const color = defaultColor || productDefaultColor;
    setSize(size);
    setColor(color);

    if (variations) {
      const variation = getVariation(variations, color, size);
      setVariation(variation);

      const variationImages = variation?.id ? imagesMap.get(variation?.id) : [];
      if (variationImages?.length && setImages) setImages(variationImages);
    }
  }, [data, variations]);

  return {
    color,
    size,
    variation,
    availableSizes,
    handleSizeChange,
    handleColorChange,
    setVariation,
  };
};
