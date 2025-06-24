"use client";

import { paths } from "@/config/paths";
import ProductChangeDialog from "@/features/Products/components/Dialogs/ProductChange/ProductChangeDialog";
import { Button } from "@/shared/components/UI/Button";
import Link from "next/link";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import { ReactNode } from "react";
import { useRemoveFromFavorite } from "../../api/favoriteQueries";
import { FavoriteProduct } from "../../types";
import { ProductServer, ProductVariation } from "@/features/Products/types";
import { getFavoriteItemInfo } from "../../utils/getFavoriteItemInfo";
import { useAddToCart } from "@/features/Cart/api/cartMutations";
import { notify } from "@/shared/lib/notify";

const FavoriteAddToCartDialog = ({
  favoriteItem,
  disabled,
  children,
}: {
  favoriteItem: FavoriteProduct;
  disabled: boolean;
  children: ReactNode;
}) => {
  const { id, parentId, quantity, color, size } =
    getFavoriteItemInfo(favoriteItem);

  const isTablet = useMediaCustom("lg");

  // const { mutate: removeFromFavorite } = useRemoveFromFavorite({});

  const { mutate: addToCart, isPending } = useAddToCart({
    onSuccess: () => {
      notify({
        message: "Товар успешно добавлен в корзину",
        variant: "success",
      });
      // removeFromFavorite({ id });
    },
  });

  const handleSaveChange = (
    product: ProductServer | null,
    variation: ProductVariation | null
  ) => {
    if (!product || !variation) return;
    addToCart({ quantity, id: variation.id });
  };

  return (
    <ProductChangeDialog
      productId={parentId}
      defaultColor={color}
      defaultSize={size}
      disabled={disabled}
      renderButtons={(product, variation, disabled) => (
        <div className="flex flex-col gap-4 lg:gap-10">
          <Button
            className="w-full"
            disabled={isPending || disabled}
            size={isTablet ? "medium" : "normal"}
            onClick={() => {
              handleSaveChange(product, variation);
            }}
          >
            Добавить в корзину
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

export default FavoriteAddToCartDialog;
