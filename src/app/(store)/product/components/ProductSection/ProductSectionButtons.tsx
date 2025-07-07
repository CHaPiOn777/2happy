import AddToCartButton from "@/features/Cart/components/AddToCartButton";
import AddedToCartSheet from "@/features/Cart/components/Sheets/AddedToCartSheet/AddedToCartSheet";
import { CartItemResponse, CartResponse } from "@/features/Cart/types";
import { getRelatedProductsQueryOptions } from "@/features/Products/api/productsApi";
import OutOfStockDialog from "@/features/Products/components/Dialogs/OutOfStockDialog";
import { ProductServer, ProductVariation } from "@/features/Products/types";
import HeartIcon from "@/shared/components/icons/HeartIcon";
import { Button } from "@/shared/components/UI/Button";
import { IconButton } from "@/shared/components/UI/IconButton";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import BuyInstantButton from "@/features/Products/components/BuyInstantButton";
import ProductSectionRelatedProducts from "./ProductSectionRelatedProducts";
import { cn } from "@/shared/utils";
import ToggleFavorite from "@/features/Favorite/components/ToggleFavorite";
import useObserver from "@/shared/hooks/useObserver";

const ProductSectionButtons = ({
  product,
  variation,
  showFixedButtons = true,
  disabled,
}: {
  product: ProductServer | null;
  variation: ProductVariation | null;
  showFixedButtons?: boolean;
  disabled: boolean;
}) => {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);
  const [cartItem, setCartItem] = useState<CartItemResponse | null>(null);
  const [shouldFetchRelated, setShouldFetchRelated] = useState<boolean>(false);

  const [showButton, setShowButton] = useState<boolean>(false);
  const observableRef = useRef<HTMLDivElement>(null);

  useObserver(
    observableRef,
    () => {
      setShowButton(false);
    },
    () => {
      setShowButton(true);
    }
  );

  const { data } = useQuery({
    ...getRelatedProductsQueryOptions({
      product_ids: variation ? [variation.parent_id] : [],
    }),
    enabled: shouldFetchRelated,
  });

  const onClick = () => {
    setShouldFetchRelated(true);
  };

  const onAddItemSuccess = (data: CartResponse) => {
    const addedCartItem = data.items.find((item) => item.id === variation?.id);

    setSheetOpen(true);

    if (addedCartItem) setCartItem(addedCartItem);
  };

  // if (variation?.stock_status === "outofstock") {
  //   return (
  //     <div className="flex gap-2">
  //       <OutOfStockDialog>
  //         <Button variant="secondary" className="w-full" disabled={disabled}>
  //           Узнать о поступлении
  //         </Button>
  //       </OutOfStockDialog>
  //       <ToggleFavorite product={product} variation={variation}>
  //         {(isFavorite, handleToggle) => (
  //           <IconButton
  //             className={cn(
  //               "[&_svg]:fill-transparent hidden sm:inline-flex",
  //               isFavorite && "[&_svg]:fill-white"
  //             )}
  //             size="normal"
  //             onClick={handleToggle}
  //             disabled={disabled}
  //           >
  //             <HeartIcon className="stroke-white" />
  //           </IconButton>
  //         )}
  //       </ToggleFavorite>
  //     </div>
  //   );
  // }

  return (
    <>
      <div ref={observableRef} className="flex sm:gap-2">
        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-2">
          <AddToCartButton
            className="w-full sm:w-1/2"
            variationId={variation?.id ?? 0}
            disabled={disabled}
            onClick={onClick}
            onSuccess={onAddItemSuccess}
          >
            Добавить в корзину
          </AddToCartButton>
          <BuyInstantButton
            name={product?.name}
            variation={variation}
            disabled={disabled}
          />
        </div>
        <ToggleFavorite
          product={product}
          variation={variation}
          className="hidden lg:inline-flex"
        >
          {(isFavorite, handleToggle) => (
            <IconButton
              className={cn(
                "[&_svg]:fill-transparent hidden sm:inline-flex",
                isFavorite && "[&_svg]:fill-white"
              )}
              size="normal"
              onClick={handleToggle}
              disabled={disabled}
            >
              <HeartIcon className="stroke-white" />
            </IconButton>
          )}
        </ToggleFavorite>

        {cartItem && (
          <AddedToCartSheet
            cartItem={cartItem}
            open={sheetOpen}
            onOpenChange={(open) => setSheetOpen(open)}
            renderRelatedProducts={() => (
              <ProductSectionRelatedProducts products={data} />
            )}
          />
        )}
      </div>
      {showFixedButtons && (
        <div
          className={cn(
            "hidden sm:flex lg:hidden fixed bottom-6 w-[calc(100%-48px)] mx-2 z-behind-header transition-all duration-300 ease-in-out sm:gap-2",
            showButton
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          )}
        >
          <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-2">
            <AddToCartButton
              className="w-full sm:w-1/2"
              variationId={variation?.id ?? 0}
              disabled={disabled}
              onClick={onClick}
              onSuccess={onAddItemSuccess}
            >
              Добавить в корзину
            </AddToCartButton>
            <BuyInstantButton name={product?.name} variation={variation} />
          </div>
          <ToggleFavorite
            product={product}
            variation={variation}
            className="hidden lg:inline-flex"
          >
            {(isFavorite, handleToggle) => (
              <IconButton
                className={cn(
                  "[&_svg]:fill-transparent ",
                  isFavorite && "[&_svg]:fill-white"
                )}
                size="normal"
                onClick={handleToggle}
                disabled={disabled}
              >
                <HeartIcon className="stroke-white" />
              </IconButton>
            )}
          </ToggleFavorite>

          {cartItem && (
            <AddedToCartSheet
              cartItem={cartItem}
              open={sheetOpen}
              onOpenChange={(open) => setSheetOpen(open)}
              renderRelatedProducts={() => (
                <ProductSectionRelatedProducts products={data} />
              )}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ProductSectionButtons;
