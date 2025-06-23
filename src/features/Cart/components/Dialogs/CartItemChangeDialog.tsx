"use client";

import { paths } from "@/config/paths";
import ProductChangeDialog from "@/features/Products/components/Dialogs/ProductChange/ProductChangeDialog";
import Link from "next/link";
import { ReactNode } from "react";
import { CartItemResponse } from "../../types";
import { ProductServer, ProductVariation } from "@/features/Products/types";
import { getVariationsAttributes } from "@/features/Products/utils/getVariationAttributes";
import { getCartItemAttributes } from "../../utils/getCartItemAttributes";
import { useAddToCart, useDeleteCartItem } from "../../api/cartMutations";
import { IconButton } from "@/shared/components/UI/IconButton";
import HeartIcon from "@/shared/components/icons/HeartIcon";
import AddToCartButton from "../AddToCartButton";
import { Button } from "@/shared/components/UI/Button";
import { getCartItemInfo } from "../../utils/getCartItemInfo";

const CartItemChangeDialog = ({
  cartItem,
  children,
}: {
  cartItem: CartItemResponse;
  children: ReactNode;
}) => {
  const { key, parentId, quantity, size, color } = getCartItemInfo(cartItem);

  const { mutate: addToCart, isPending: isAddingToCart } = useAddToCart({
    onSuccess: () => {
      deleteCartItem({ key });
    },
  });
  const { mutate: deleteCartItem, isPending } = useDeleteCartItem({});

  const handleAddToCart = (variation: ProductVariation | null) => {
    addToCart({ id: variation?.id, quantity: quantity });
  };

  const isAddButtonDisabled = (variation: ProductVariation | null) => {
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
            disabled={
              disabled || isAddingToCart || isAddButtonDisabled(variation)
            }
            onClick={() => handleAddToCart(variation)}
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

export default CartItemChangeDialog;
