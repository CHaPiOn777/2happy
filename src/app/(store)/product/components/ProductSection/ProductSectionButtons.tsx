import AddToCartButton from "@/features/Cart/components/AddToCartButton";
import AddedToCartSheet from "@/features/Cart/components/Sheets/AddedToCartSheet/AddedToCartSheet";
import { CartItemResponse, CartResponse } from "@/features/Cart/types";
import { getRelatedProductsQueryOptions } from "@/features/Products/api/productsApi";
import OutOfStockDialog from "@/features/Products/components/Dialogs/OutOfStockDialog";
import ProductServerCard from "@/features/Products/components/Cards/ProductServerCard";
import { ProductVariation } from "@/features/Products/types";
import HeartIcon from "@/shared/components/icons/HeartIcon";
import { Button } from "@/shared/components/UI/Button";
import { IconButton } from "@/shared/components/UI/IconButton";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import BuyInstantButton from "@/features/Products/components/BuyInstantButton";
import ProductSectionRelatedProducts from "./ProductSectionRelatedProducts";

const ProductSectionButtons = ({
  variation,
  disabled,
}: {
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
        <IconButton
          className="[&_svg]:fill-transparent"
          size="normal"
          disabled={disabled}
        >
          <HeartIcon className="stroke-white" />
        </IconButton>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <div className="w-full flex gap-2">
        <AddToCartButton
          className="w-1/2"
          variationId={variation?.id ?? 0}
          disabled={disabled}
          onClick={onClick}
          onSuccess={onAddItemSuccess}
        >
          Добавить в корзину
        </AddToCartButton>
        <BuyInstantButton variation={variation} />
      </div>
      <IconButton
        className="[&_svg]:fill-transparent"
        size="normal"
        disabled={disabled}
      >
        <HeartIcon className="stroke-white" />
      </IconButton>

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
