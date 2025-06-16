import ProductInfo from "@/app/(store)/product/components/ProductSection/ProductInfo/ProductInfo";
import ProductInfoLoader from "@/app/(store)/product/components/ProductSection/ProductInfo/ProductInfoLoader";
import ProductSlider from "@/app/(store)/product/components/ProductSection/ProductSlider/ProductSlider";
import ProductSliderLoader from "@/app/(store)/product/components/ProductSection/ProductSlider/ProductSliderLoader";
import { useDeleteCartItem } from "@/features/Cart/api/cartMutations";
import AddToCartButton from "@/features/Cart/components/AddToCartButton";
import { CartItemResponse } from "@/features/Cart/types";
import { getCartItemAttributes } from "@/features/Cart/utils/getCartItemAttributes";
import { ProductVariation } from "@/features/Products/types";
import { getVariationsAttributes } from "@/features/Products/utils/getVariationAttributes";
import HeartIcon from "@/shared/components/icons/HeartIcon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import { IconButton } from "@/shared/components/UI/IconButton";
import { Image } from "@/shared/types/api";
import { ReactNode, Suspense, useState } from "react";

const CartItemChangeDialog = ({
  cartItem,
  trigger,
}: {
  cartItem: CartItemResponse;
  trigger: ReactNode;
}) => {
  const productId = cartItem.parent_id;
  const [open, setOpen] = useState<boolean>(false);
  const [images, setImages] = useState<Image[]>([]);

  const { size: cartItemSize, color: cartItemColor } =
    getCartItemAttributes(cartItem);

  const { mutate: deleteCartItem, isPending } = useDeleteCartItem({});

  const isAddButtonDisabled = (variation: ProductVariation | null) => {
    if (variation == null) return true;

    const { size: variationSize, color: variationColor } =
      getVariationsAttributes(variation);

    return cartItemSize === variationSize && cartItemColor === variationColor;
  };

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger onClick={() => setOpen(true)} asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="w-full max-w-[1224px] p-20">
        <DialogHeader className="sr-only">
          <DialogTitle className="sr-only">Товар из корзины</DialogTitle>
          <DialogDescription className="sr-only">
            Товар из корзины
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-12">
          <Suspense fallback={<ProductSliderLoader />}>
            <ProductSlider id={productId} images={images} />
          </Suspense>
          <Suspense
            fallback={<ProductInfoLoader className="flex-1 basis-[49%]" />}
          >
            <ProductInfo
              id={productId}
              className="flex-1 basis-[49%]"
              defaultColor={cartItemColor}
              defaultSize={cartItemSize}
              setImages={setImages}
              renderButtons={(_, variation, disabled) => (
                <div className="flex gap-2">
                  <AddToCartButton
                    className="w-full"
                    variationId={variation?.id ?? 0}
                    quantity={1}
                    disabled={
                      disabled || isPending || isAddButtonDisabled(variation)
                    }
                    onClick={() => {
                      deleteCartItem({ key: cartItem.key });
                    }}
                  >
                    Сохранить изменения
                  </AddToCartButton>
                  <IconButton
                    variant="secondary"
                    className="border border-black [&_svg]:fill-transparent"
                    size="normal"
                    disabled={disabled}
                  >
                    <HeartIcon className="stroke-black" />
                  </IconButton>
                </div>
              )}
            />
          </Suspense>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartItemChangeDialog;
