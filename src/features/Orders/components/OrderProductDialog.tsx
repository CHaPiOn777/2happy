import AddToCartButton from "@/features/Cart/components/AddToCartButton";
import { OrderProductItem } from "../types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import { Image } from "@/shared/types/api";
import { ReactNode, Suspense, useState } from "react";
import ProductSliderLoader from "@/app/(store)/product/components/ProductSection/ProductSlider/ProductSliderLoader";
import ProductSlider from "@/app/(store)/product/components/ProductSection/ProductSlider/ProductSlider";
import ProductInfo from "@/app/(store)/product/components/ProductSection/ProductInfo/ProductInfo";
import ProductInfoLoader from "@/app/(store)/product/components/ProductSection/ProductInfo/ProductInfoLoader";
import HeartIcon from "@/shared/components/icons/HeartIcon";
import { IconButton } from "@/shared/components/UI/IconButton";

const OrderProductDialog = ({
  children,
  orderItem,
}: {
  children: ReactNode;
  orderItem: OrderProductItem;
}) => {
  const productId = orderItem.product_id;
  const [open, setOpen] = useState<boolean>(false);
  const [images, setImages] = useState<Image[]>([]);

  const orderItemColor = orderItem.meta_data.find(
    (item) => item.key === "pa_color"
  )?.display_value;
  const orderItemSize = orderItem.meta_data.find(
    (item) => item.key === "pa_size"
  )?.display_value;
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger
        className="cursor-pointer"
        onClick={() => setOpen(true)}
        asChild
      >
        {children}
      </DialogTrigger>
      <DialogContent className="w-full max-w-[1224px] p-20">
        <DialogHeader className="sr-only">
          <DialogTitle className="sr-only">Товар из заказа</DialogTitle>
          <DialogDescription className="sr-only">
            Товар из заказа
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-12">
          <Suspense fallback={<ProductSliderLoader />}>
            <ProductSlider
              className="max-w-[600px] w-full"
              id={productId}
              images={images}
            />
          </Suspense>
          <Suspense fallback={<ProductInfoLoader className="basis-auto" />}>
            <ProductInfo
              id={productId}
              defaultColor={orderItemColor}
              defaultSize={orderItemSize}
              setImages={setImages}
              classNames={{ wrapper: "basis-auto" }}
              renderButtons={(product, variation, disabled) => (
                <>
                  {variation?.stock_status === "outofstock" ? null : (
                    <div className="flex gap-2">
                      <AddToCartButton
                        className="w-full"
                        variationId={variation?.id ?? 0}
                        quantity={1}
                        disabled={disabled}
                      >
                        Добавить в корзину
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
                </>
              )}
            />
          </Suspense>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderProductDialog;
