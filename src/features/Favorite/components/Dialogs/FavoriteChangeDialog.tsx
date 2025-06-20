"use client";

import { paths } from "@/config/paths";
import ProductChangeDialog from "@/features/Products/components/Dialogs/ProductChange/ProductChangeDialog";
import { Button } from "@/shared/components/UI/Button";
import Link from "next/link";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import { ReactNode } from "react";
import {
  useAddToFavorite,
  useRemoveFromFavorite,
} from "../../api/favoriteQueries";
import { FavoriteProduct } from "../../types";
import { ProductServer, ProductVariation } from "@/features/Products/types";
import { createFavorite } from "../../utils/createFavorite";
import { getFavoriteItemInfo } from "../../utils/getFavoriteItemInfo";
import { getVariationsAttributes } from "@/features/Products/utils/getVariationAttributes";

const FavoriteChangeDialog = ({
  favoriteItem,
  children,
}: {
  favoriteItem: FavoriteProduct;
  children: ReactNode;
}) => {
  const { parentId, color, size } = getFavoriteItemInfo(favoriteItem);

  const isTablet = useMediaCustom("lg");

  const { mutate: addToFavorite, isPending } = useAddToFavorite({
    onSuccess: () => {
      removeFromFavorite({ id: favoriteItem.id });
    },
  });

  const { mutate: removeFromFavorite } = useRemoveFromFavorite({});

  const handleSaveChange = (
    product: ProductServer | null,
    variation: ProductVariation | null
  ) => {
    if (!product || !variation) return;
    const newFavoriteItem = createFavorite(product, variation);
    addToFavorite({ item: newFavoriteItem });
  };

  const isSaveChangesDisabled = (variation: ProductVariation | null) => {
    if (variation == null) return true;

    const { size: variationSize, color: variationColor } =
      getVariationsAttributes(variation);

    return size === variationSize && color === variationColor;
  };

  return (
    <ProductChangeDialog
      productId={parentId}
      defaultColor={color}
      defaultSize={size}
      renderButtons={(product, variation, disabled) => (
        <div className="flex flex-col gap-4 lg:gap-10">
          <Button
            className="w-full"
            disabled={isPending || disabled || isSaveChangesDisabled(variation)}
            size={isTablet ? "medium" : "normal"}
            onClick={() => {
              handleSaveChange(product, variation);
            }}
          >
            Сохранить изменения
          </Button>
          {product && (
            <Link
              href={paths.product.getHref(product.id, product.slug, {
                color,
                size,
              })}
              className="custom-underline w-max after:bottom-0"
            >
              Посмотреть детали
            </Link>
          )}
        </div>
      )}
    >
      {children}
    </ProductChangeDialog>
  );
};

export default FavoriteChangeDialog;
