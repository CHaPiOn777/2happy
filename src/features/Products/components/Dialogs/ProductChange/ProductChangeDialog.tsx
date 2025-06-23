import ProductInfo from "@/app/(store)/product/components/ProductSection/ProductInfo/ProductInfo";
import ProductInfoLoader from "@/app/(store)/product/components/ProductSection/ProductInfo/ProductInfoLoader";
import ProductSliderLoader from "@/app/(store)/product/components/ProductSection/ProductSlider/ProductSliderLoader";
import { ProductServer, ProductVariation } from "@/features/Products/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import { Image } from "@/shared/types/api";
import { Dispatch, ReactNode, SetStateAction, Suspense, useState } from "react";
import ProductChangeImages from "./ProductChangeImages";
import ProductChangeImagesLoader from "./ProductChangeImagesLoader";

{
  /* <div className="flex gap-2">
  <AddToCartButton
    className="w-full"
    variationId={variation?.id ?? 0}
    quantity={1}
    disabled={disabled || isAddButtonDisabled(variation)}
    onClick={onAddClick}
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
</div>; */
}

// const isAddButtonDisabled = (variation: ProductVariation | null) => {
//   if (variation == null) return true;

//   const { size: variationSize, color: variationColor } =
//     getVariationsAttributes(variation);

//   return defaultColor === variationSize && defaultColor === variationColor;
// };

const ProductChangeDialog = ({
  manualOpen,
  setManualOpen,
  productId,
  title,
  description,
  defaultColor,
  defaultSize,
  renderButtons,
  children,
}: {
  manualOpen?: boolean;
  setManualOpen?: Dispatch<SetStateAction<boolean>>;
  productId: number;
  title?: ReactNode;
  description?: ReactNode;
  defaultSize: string;
  defaultColor: string;
  renderButtons?: (
    product: ProductServer | null,
    variation: ProductVariation | null,
    disabled: boolean
  ) => ReactNode;
  children: ReactNode;
}) => {
  const [innerOpen, setInnerOpen] = useState<boolean>(false);
  const [images, setImages] = useState<Image[]>([]);

  const open = manualOpen ?? innerOpen;
  const setOpen = setManualOpen ?? setInnerOpen;

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger onClick={() => setOpen(open)} asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-screen max-w-full h-screen md:max-w-[720px] md:h-[552px] lg:max-w-[1224px] lg:h-min !pr-2 !pl-4 md:!pr-8 md:!pl-8 !py-10 !pt-12 lg:!px-20 lg:!py-20">
        <DialogHeader className="sr-only">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <DialogDescription className="sr-only">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 overflow-y-auto md:overflow-y-hidden  pr-2 md:pr-0 relative">
          <Suspense fallback={<ProductChangeImagesLoader />}>
            <ProductChangeImages productId={productId} images={images} />
          </Suspense>
          <Suspense fallback={<ProductInfoLoader className="w-full" />}>
            <ProductInfo
              id={productId}
              classNames={{
                wrapper: "w-full md:relative",
                info: "sm:gap-4 lg:gap-8",
                sku: "hidden",
                favoriteButton:
                  "sm:absolute lg:relative top-4 sm:top-4 right-4 sm:right-6 md:right-auto md:-left-24 lg:left-auto md:top-2 lg:top-0 lg:flex border border-main lg:border-0",
              }}
              defaultColor={defaultColor}
              defaultSize={defaultSize}
              setImages={setImages}
              renderButtons={renderButtons}
            />
          </Suspense>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductChangeDialog;
