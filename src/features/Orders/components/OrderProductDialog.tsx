"use client";

import { paths } from "@/config/paths";
import ProductChangeDialog from "@/features/Products/components/Dialogs/ProductChange/ProductChangeDialog";
import Link from "next/link";
import { ReactNode } from "react";
import { ProductVariation } from "@/features/Products/types";
import { useAddToCart } from "@/features/Cart/api/cartMutations";
import { Button } from "@/shared/components/UI/Button";
import { OrderProductItem } from "../types";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";

const OrderProductDialog = ({
  orderProduct,
  children,
}: {
  orderProduct: OrderProductItem;
  children: ReactNode;
}) => {
  const { mutate: addToCart, isPending: isAddingToCart } = useAddToCart({
    onSuccess: () => {},
  });

  const handleAddToCart = (variation: ProductVariation | null) => {
    addToCart({ id: variation?.id, quantity: 1 });
  };

  const orderProductColor =
    orderProduct.meta_data.find((item) => item.key === "pa_color")
      ?.display_value ?? "";
  const orderProductSize =
    orderProduct.meta_data.find((item) => item.key === "pa_size")
      ?.display_value ?? "";

  return (
    <ProductChangeDialog
      productId={orderProduct.product_id}
      defaultColor={orderProductColor}
      defaultSize={orderProductSize}
      renderButtons={(product, variation, disabled) => (
        <div className="flex flex-col gap-4 lg:gap-10">
          <Button
            className="w-full"
            disabled={disabled || isAddingToCart}
            onClick={() => handleAddToCart(variation)}
          >
            {isAddingToCart && <LoaderIcon className="animate-spin" />}
            Добавить в корзину
          </Button>
          {product && (
            <Link
              href={paths.product.getHref(product.id, product.slug, {
                color: orderProductColor,
                size: orderProductSize,
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

export default OrderProductDialog;
