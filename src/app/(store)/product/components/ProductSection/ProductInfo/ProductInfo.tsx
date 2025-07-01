"use client";

import { env } from "@/config/env";
import { paths } from "@/config/paths";
import { ReactNode, useMemo } from "react";

import ShareIcon from "@/shared/components/icons/ShareIcon";

import { cn } from "@/shared/utils/cn";
import { Skeleton } from "@/shared/components/UI/Skeleton";
import { Chip } from "@/shared/components/UI/Chip";
import { Separator } from "@/shared/components/UI/Separator";

import CopyButton from "@/shared/components/UI/CopyButton";
import ProductInfoSizes from "./ProductInfoSizes";
import ProductInfoColors from "./ProductInfoColors";

import { Image } from "@/shared/types/api";

import { useGetProductByIdSuspense } from "@/features/Products/hooks/useGetProductByIdSuspense";
import { useGetProductVariations } from "@/features/Products/hooks/useGetProductVariations";
import {
  TProductAttributesHandler,
  useProductAttributes,
} from "@/features/Products/hooks/useProductAttributes";

import {
  getProductAttributes,
  getProductSale,
  getProductVariationOptions,
  getVariationPriceByAttributes,
  getVariationsImages,
} from "@/features/Products/utils";
import { getVariation } from "@/features/Products/utils/getVariation";
import { ProductServer, ProductVariation } from "@/features/Products/types";
import ToggleFavorite from "@/features/Favorite/components/ToggleFavorite";
import HeartIcon from "@/shared/components/icons/HeartIcon";

const defaultRenderName = (product: ProductServer) => (
  <h2 className="text-h4">{product?.name}</h2>
);

const ProductInfo = ({
  id,
  defaultSize,
  defaultColor,
  handleChange,
  renderName = defaultRenderName,
  renderButtons,
  setImages,
  classNames,
}: {
  id: number;
  defaultSize?: string | null;
  defaultColor?: string | null;
  classNames?: {
    wrapper?: string;
    info?: string;
    title?: string;
    sku?: string;
    variations?: string;
    favoriteButton?: string;
  };
  handleChange?: TProductAttributesHandler;
  renderName?: (product: ProductServer) => ReactNode;
  renderButtons?: (
    product: ProductServer | null,
    variation: ProductVariation | null,
    disabled: boolean
  ) => ReactNode;
  setImages?: (images: Image[]) => void;
}) => {
  const { data: product } = useGetProductByIdSuspense(id, (data) => {
    if (setImages) setImages(data.images);
  });
  const { data: variations, isLoading: isLoadingVariation } =
    useGetProductVariations(id, (data) => {
      const imagesMap = getVariationsImages(data, product.images);

      const variation = getVariation(data, color, size);

      setVariation(variation);

      const variationImages = variation?.id ? imagesMap.get(variation?.id) : [];
      if (variationImages?.length && setImages) setImages(variationImages);
    });

  const { colors: defaultColors, sizes: defaultSizes } = getProductAttributes(
    product.attributes
  );

  const {
    color,
    size,
    variation,
    availableSizes,
    handleColorChange,
    handleSizeChange,
    setVariation,
  } = useProductAttributes({
    data: product,
    variations: variations?.items,
    defaultColor,
    defaultSize,
    handleChange,
    setImages,
  });

  const { sizes, colors } = useMemo(
    () => getProductVariationOptions(variations?.items),
    [variations?.items]
  );

  const variationPrice = useMemo(
    () => getVariationPriceByAttributes(variations?.items, size, color),
    [variations?.items, size, color]
  );

  const isVariationOutOfStock = variation
    ? variation?.stock_status === "outofstock"
    : false;

  return (
    <div
      className={cn("flex flex-col gap-8 justify-between", classNames?.wrapper)}
    >
      <div className={cn("flex flex-col gap-4 sm:gap-8", classNames?.info)}>
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between gap-4">
            {renderName(product)}
            <div className="flex items-center gap-4">
              <CopyButton
                copyText={`${env.APP_URL}${paths.product.getHref(
                  product.id,
                  product.slug
                )}`}
                tooltip="Поделиться"
              >
                <ShareIcon />
              </CopyButton>
              <ToggleFavorite
                product={product}
                variation={variation}
                className={cn(
                  "absolute sm:relative top-4 right-8 sm:top-0 sm:right-0 z-10 w-10 h-10 bg-white justify-center items-center flex lg:hidden",
                  classNames?.favoriteButton
                )}
              >
                {(isFavorite, handleToggle) => (
                  <button onClick={handleToggle}>
                    <HeartIcon
                      className={cn(
                        "inline-flex hover:fill-main",
                        isFavorite && "fill-main"
                      )}
                    />
                  </button>
                )}
              </ToggleFavorite>
            </div>
          </div>
          <span className={cn("text-gray-middle", classNames?.sku)}>
            Артикул: {product.sku}
          </span>
          <div className={cn("flex flex-col gap-2", classNames?.variations)}>
            <div className="flex items-center gap-2">
              {isLoadingVariation && (
                <Skeleton className="w-[120px] h-[28px]" />
              )}
              {!isLoadingVariation && variationPrice && (
                <div className="flex gap-2 items-center">
                  <span
                    className={cn(
                      "text-h4 text-main",
                      variationPrice.on_sale &&
                        "text-h5 line-through text-gray-middle"
                    )}
                  >
                    {variationPrice.regular_price} &#8376;
                  </span>
                  {variationPrice.on_sale && (
                    <>
                      <span className="text-h4">
                        {variationPrice.sale_price} &#8376;
                      </span>
                      <Chip size="normal" variant="pink" className="px-3">
                        {`- ${getProductSale(
                          +variationPrice.regular_price,
                          +variationPrice.sale_price
                        )}%`}
                      </Chip>
                    </>
                  )}
                </div>
              )}
              {!isLoadingVariation && !variationPrice && <div>Нет цены</div>}
              {isVariationOutOfStock && (
                <Chip variant="gray" size="medium" className="py-1.5">
                  Нет на складе
                </Chip>
              )}
            </div>

            <div className="text-gray-middle text-description">
              Включая налоги, без стоимости доставки
            </div>
          </div>
        </div>
        <Separator />
        <ProductInfoColors
          color={color}
          colors={colors}
          handleColorChange={handleColorChange}
          defaultColors={defaultColors}
          isLoading={isLoadingVariation}
        />
        <Separator />
        <ProductInfoSizes
          size={size}
          sizes={sizes}
          handleSizeChange={handleSizeChange}
          defaultSizes={defaultSizes}
          availableSizes={availableSizes}
          isLoading={isLoadingVariation}
        />
      </div>
      {renderButtons
        ? renderButtons(product, variation, isLoadingVariation || !variation)
        : null}
    </div>
  );
};

export default ProductInfo;
