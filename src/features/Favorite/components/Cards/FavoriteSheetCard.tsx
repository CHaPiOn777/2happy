"use client";

import MinusIcon from "@/shared/components/icons/MinusIcon";
import PlusIcon from "@/shared/components/icons/PlusIcon";
import TrashIcon from "@/shared/components/icons/TrashIcon";
import {
  IconButton,
  IconButtonLoader,
} from "@/shared/components/UI/IconButton";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Separator } from "@/shared/components/UI/Separator";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";
import { cn } from "@/shared/utils/cn";
import { ComponentPropsWithoutRef } from "react";
import { Chip } from "@/shared/components/UI/Chip";
import { Skeleton } from "@/shared/components/UI/Skeleton";
import AddToCartIcon from "@/shared/components/icons/AddToCartIcon";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import { FavoriteProduct } from "../../types";
import { getFavoriteItemInfo } from "../../utils/getFavoriteItemInfo";
import { useRemoveFromFavorite } from "../../api/favoriteApi";
import { useAddToCart } from "@/features/Cart/api/cartMutations";
import { useChangeFavoriteQuantity } from "../../hooks/useChangeFavoriteQuantity";

const FavoriteSheetCard = ({
  favorite,
  className,
  ...props
}: { favorite: FavoriteProduct } & ComponentPropsWithoutRef<"article">) => {
  const {
    id,
    name,
    variationId,
    isOnSale,
    regularPrice,
    salePrice,
    salePercent,
    currencySymbol,
    variation,
    quantity,
    isInStock,
    image,
  } = getFavoriteItemInfo(favorite);

  const isTablet = useMediaCustom("lg");

  const { mutate: removeFromFavorite } = useRemoveFromFavorite({});

  const handleDelete = () => removeFromFavorite(id);

  const { mutate, isPending } = useAddToCart({
    onSuccess: () => {
      removeFromFavorite(id);
    },
  });

  const handleAddToCart = () => {
    mutate({ quantity, id: variationId });
  };

  const {
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    isDecreaseDisabled,
    isIncreaseDisabled,
  } = useChangeFavoriteQuantity();

  return (
    <article
      className={cn(
        "w-full flex gap-6 h-[144px] lg:h-[248px] pb-4 lg:pb-8 border-b border-gray last:border-b-0",
        className
      )}
      {...props}
    >
      <ImageWithLoader
        wrapperClassName="w-[92px] h-[128px] lg:h-auto lg:w-[148px] shrink-0"
        src={image?.src ?? ""}
        alt={image?.alt ?? ""}
      />
      <div className="flex flex-col gap-4 lg:gap-6 w-full">
        <div className="flex flex-col gap-2 lg:gap-4">
          <div className="flex justify-between gap-6">
            <h5 className="text-button-xs lg:text-h5">{name}</h5>
            {isInStock && (
              <IconButton
                className={cn(
                  "border border-gray",
                  isPending && "animate-pulse duration-1000"
                )}
                variant="secondary"
                size={isTablet ? "extraSmall" : "small"}
                data-tooltip-id="cart-add"
                data-tooltip-content="Добавить в корзину"
                disabled={isPending}
                onClick={handleAddToCart}
              >
                <AddToCartIcon />
                <StyledTooltip id="cart-add" />
              </IconButton>
            )}
          </div>
          <div className="text-description lg:text-h5 flex items-center gap-2">
            <span className={cn(isOnSale && "line-through text-gray-middle")}>
              {regularPrice} {currencySymbol}
            </span>
            {isOnSale && (
              <>
                <span>
                  {salePrice} {currencySymbol}
                </span>
                <Chip variant="pink" size="small">
                  - {salePercent} %
                </Chip>
              </>
            )}
          </div>
          <div className="flex flex-row lg:flex-col gap-2 text-description lg:text-body2">
            <div className="flex items-center gap-2 lg:gap-4">
              <span>Размер</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle">{variation.size}</span>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <span>Цвет</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle">{variation.color}</span>
            </div>
          </div>
        </div>
        <div className="w-full flex  gap-4">
          <div className="flex justify-between lg:justify-normal gap-2 w-full">
            {isInStock && (
              <div className="flex gap-2">
                <IconButton
                  className="border border-gray"
                  variant="secondary"
                  size="extraSmall"
                  onClick={() => handleDecreaseQuantity(favorite)}
                  disabled={isDecreaseDisabled(favorite)}
                >
                  <MinusIcon />
                </IconButton>
                <div className="text-body2 py-1 px-8 bg-gray-light">
                  {quantity}
                </div>
                <IconButton
                  className="border border-gray "
                  variant="secondary"
                  size="extraSmall"
                  onClick={() => handleIncreaseQuantity(favorite)}
                  disabled={isIncreaseDisabled(favorite)}
                >
                  <PlusIcon />
                </IconButton>
              </div>
            )}
            <button
              data-tooltip-id="favorite-delete"
              data-tooltip-content="Удалить товар"
              onClick={handleDelete}
            >
              <TrashIcon className="stroke-gray-middle hover:stroke-red" />
              <StyledTooltip id="favorite-delete" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FavoriteSheetCard;

export const FavoriteSheetCardLoader = () => {
  return (
    <div className="w-full flex gap-6 h-[248px] shrink-0 pb-8 border-b border-gray last:border-b-0">
      <Skeleton className="w-[148px] shrink-0" />
      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <Skeleton className="w-3/4 h-[24px]" />
          <Skeleton className="w-[190px] h-[20px] mb-2" />
          <Skeleton className="w-[130px] h-[18px]" />
          <Skeleton className="w-[130px] h-[18px]" />
        </div>
        <div className="flex gap-2">
          <IconButtonLoader size="extraSmall" />
          <Skeleton className="w-[68px] h-[32px]" />
          <IconButtonLoader size="extraSmall" />
        </div>
      </div>
    </div>
  );
};
