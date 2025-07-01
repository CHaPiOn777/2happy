"use client";

import MinusIcon from "@/shared/components/icons/MinusIcon";
import PlusIcon from "@/shared/components/icons/PlusIcon";
import TrashIcon from "@/shared/components/icons/TrashIcon";
import { IconButton } from "@/shared/components/UI/IconButton";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Separator } from "@/shared/components/UI/Separator";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";
import { cn } from "@/shared/utils/cn";
import { ComponentPropsWithoutRef } from "react";
import { Chip } from "@/shared/components/UI/Chip";
import AddToCartIcon from "@/shared/components/icons/AddToCartIcon";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import { FavoriteProduct } from "@/features/Favorite/types";
import { getFavoriteItemInfo } from "@/features/Favorite/utils/getFavoriteItemInfo";
import { useRemoveFromFavorite } from "@/features/Favorite/api/favoriteQueries";
import { useAddToCart } from "@/features/Cart/api/cartMutations";
import { useChangeFavoriteQuantity } from "@/features/Favorite/hooks/useChangeFavoriteQuantity";
import Link from "next/link";
import { paths } from "@/config/paths";
import FavoriteAddToCartDialog from "../../Dialogs/FavoriteAddToCartDialog";

const FavoriteSheetCard = ({
  favorite,
  className,
  ...props
}: { favorite: FavoriteProduct } & ComponentPropsWithoutRef<"article">) => {
  const {
    id,
    name,
    parentId,
    parentSlug,
    variationId,
    color,
    size,
    isOnSale,
    regularPrice,
    salePrice,
    salePercent,
    currencySymbol,
    quantity,
    isInStock,
    image,
  } = getFavoriteItemInfo(favorite);

  const isTablet = useMediaCustom("lg");

  const { mutate: removeFromFavorite } = useRemoveFromFavorite({});

  const handleDelete = () => removeFromFavorite({ id });

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
      <div className="flex flex-col justify-between xs:justify-normal gap-4 lg:gap-6 w-full">
        <div className="flex flex-col gap-2 lg:gap-4">
          <div className="flex justify-between gap-6">
            <Link
              href={paths.product.getHref(parentId, parentSlug, {
                color,
                size,
              })}
            >
              <h5 className="text-button-xs lg:text-h5">{name}</h5>
            </Link>

            <FavoriteAddToCartDialog
              disabled={!isInStock}
              favoriteItem={favorite}
            >
              <IconButton
                className={cn("border border-gray hidden xs:inline-flex")}
                variant="secondary"
                disabled={!isInStock}
                size={isTablet ? "extraSmall" : "small"}
                data-tooltip-id="cart-add"
                data-tooltip-content="Добавить в корзину"
              >
                <AddToCartIcon />
                <StyledTooltip id="cart-add" />
              </IconButton>
            </FavoriteAddToCartDialog>
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
              <span className="text-gray-middle">{size}</span>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <span>Цвет</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle">{color}</span>
            </div>
          </div>
        </div>
        <div className="hidden xs:flex justify-between lg:justify-normal gap-2 w-full">
          <div className="flex gap-2">
            <IconButton
              className="border border-gray"
              variant="secondary"
              size="extraSmall"
              onClick={() => handleDecreaseQuantity(favorite)}
              disabled={isDecreaseDisabled(favorite) || !isInStock}
            >
              <MinusIcon />
            </IconButton>
            <div className="text-body2 py-1 px-8 bg-gray-light">{quantity}</div>
            <IconButton
              className="border border-gray "
              variant="secondary"
              size="extraSmall"
              onClick={() => handleIncreaseQuantity(favorite)}
              disabled={isIncreaseDisabled(favorite) || !isInStock}
            >
              <PlusIcon />
            </IconButton>
          </div>
          <button
            data-tooltip-id="favorite-delete"
            data-tooltip-content="Удалить товар"
            onClick={handleDelete}
          >
            <TrashIcon className="stroke-gray-middle hover:stroke-red" />
            <StyledTooltip id="favorite-delete" />
          </button>
        </div>

        {/* Кнопки на разрешении <= 360px */}

        <div className="flex xs:hidden justify-end gap-2 w-full">
          <FavoriteAddToCartDialog
            disabled={!isInStock}
            favoriteItem={favorite}
          >
            <IconButton
              className={cn("border border-gray")}
              variant="secondary"
              disabled={!isInStock}
              size={"extraSmall"}
            >
              <AddToCartIcon />
            </IconButton>
          </FavoriteAddToCartDialog>
          <IconButton
            onClick={handleDelete}
            className="border border-gray"
            size="extraSmall"
            variant="secondary"
          >
            <TrashIcon className=" hover:stroke-red" />
          </IconButton>
        </div>
      </div>
    </article>
  );
};

export default FavoriteSheetCard;
