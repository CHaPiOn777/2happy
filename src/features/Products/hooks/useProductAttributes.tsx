import { useEffect, useMemo, useState } from "react";
import { getAttributesByProductPrice } from "../utils/getAttributesByProductPrice";
import { getVariation } from "../utils";
import { ProductServer, ProductVariation } from "../types";
import { createColorToSizeMap } from "../utils/getProductVariationOptions";

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
}: {
  data: ProductServer;
  variations: ProductVariation[] | undefined;
  defaultColor?: string | null;
  defaultSize?: string | null;
  handleChange?: TProductAttributesHandler;
}) => {
  const { size: productDefaultSize, color: productDefaultColor } =
    getAttributesByProductPrice(data, variations);

  const [color, setColor] = useState(productDefaultColor);
  const [size, setSize] = useState(productDefaultSize);
  const [variation, setVariation] = useState<ProductVariation | null>(null);

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

    if (variations) setVariation(() => getVariation(variations, color, size));
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
