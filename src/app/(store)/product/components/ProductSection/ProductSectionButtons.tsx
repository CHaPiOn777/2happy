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
import { useState } from "react";
import BuyInstantButton from "@/features/Products/components/BuyInstantButton";
import ProductSectionRelatedProducts from "./ProductSectionRelatedProducts";
import { createFavorite } from "@/features/Favorite/utils/productToFavorite";
import { useToggleFavorite } from "@/features/Favorite/hooks/useToggleFavorite";
import { cn } from "@/shared/utils";
import ToggleFavorite from "@/features/Favorite/components/ToggleFavorite";

const ProductSectionButtons = ({
  product,
  variation,
  disabled,
}: {
  product: ProductServer | null;
  variation: ProductVariation | null;
  disabled: boolean;
}) => {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);
  const [cartItem, setCartItem] = useState<CartItemResponse | null>(null);
  const [shouldFetchRelated, setShouldFetchRelated] = useState<boolean>(false);

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

  if (variation?.stock_status === "outofstock") {
    return (
      <div className="flex gap-2">
        <OutOfStockDialog>
          <Button variant="secondary" className="w-full" disabled={disabled}>
            Узнать о поступлении
          </Button>
        </OutOfStockDialog>
        <ToggleFavorite product={product} variation={variation}>
          {(isFavorite) => (
            <IconButton
              className={cn(
                "[&_svg]:fill-transparent hidden sm:inline-flex",
                isFavorite && "[&_svg]:fill-white"
              )}
              size="normal"
              disabled={disabled}
            >
              <HeartIcon className="stroke-white" />
            </IconButton>
          )}
        </ToggleFavorite>
      </div>
    );
  }

  return (
    <div className="flex sm:gap-2">
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
        <BuyInstantButton variation={variation} />
      </div>
      <ToggleFavorite product={product} variation={variation}>
        {(isFavorite) => (
          <IconButton
            className={cn(
              "[&_svg]:fill-transparent hidden sm:inline-flex",
              isFavorite && "[&_svg]:fill-white"
            )}
            size="normal"
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
  );
};

export default ProductSectionButtons;
