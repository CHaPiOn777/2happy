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
import { CartItemResponse } from "../../../types";
import { getCartItemInfo } from "../../../utils/getCartItemInfo";
import { cn } from "@/shared/utils/cn";
import { Chip } from "@/shared/components/UI/Chip";
import { useDeleteCartItem } from "../../../api/cartMutations";
import Link from "next/link";
import { paths } from "@/config/paths";
import { ReactNode } from "react";
import { Skeleton } from "@/shared/components/UI/Skeleton";
import { useChangeQuantity } from "../../../hooks/useChangeQuantity";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import CartDefaultCardMenu from "./CartDefaultCardMenu";
import { Button } from "@/shared/components/UI/Button";

const CartDefaultCard = ({
  cartItem,
  renderButtons,
}: {
  cartItem: CartItemResponse;
  renderButtons?: (cartItem: CartItemResponse) => ReactNode;
}) => {
  const {
    key,
    parentId,
    image,
    name,
    size,
    color,
    quantity,
    regularPrice,
    price,
    sku,
    salePrice,
    salePercent,
    variation,
    isOnSale,
    sumPrice,
    currencySymbol,
    categories,
    isInStock,
  } = getCartItemInfo(cartItem);

  const isTablet = useMediaCustom("lg");
  const isMedium = useMediaCustom("md");

  const getButtonsSize = () => {
    switch (true) {
      case isMedium:
        return "small";
      case isTablet:
        return "medium";
      default:
        return "small";
    }
  };

  const { mutate: deleteCartItem, isPending } = useDeleteCartItem({});

  const {
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    isDecreaseDisabled,
    isIncreaseDisabled,
  } = useChangeQuantity();

  const lastCategory = categories[categories.length - 1];

  const productLink = isInStock
    ? paths.product.getHref(parentId, name, {
        color: variation.color,
        size: variation.size,
      })
    : paths.catalog.category.getHref(
        lastCategory.id,
        lastCategory.slug,
        lastCategory.name,
        lastCategory.parent
      );

  return (
    <article
      className={cn(
        "flex flex-col gap-4 w-full py-6 lg:py-8 border-b border-gray last:border-b-0 lg:last:border-b",
        isPending && "opacity-50 pointer-events-none"
      )}
    >
      <div className="grid md:grid-cols-[minmax(200px,520px)_1fr] gap-x-12">
        <div className="flex gap-4 sm:gap-6">
          <ImageWithLoader
            wrapperClassName="w-[96px] h-[144px] sm:w-[126px] sm:h-[180px] md:w-[146px] md:h-[216px] lg:w-[120px] lg:h-[176px] shrink-0"
            src={image.src}
            alt={image.alt}
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-3 lg:gap-6">
              <Link href={productLink}>
                <h5 className="text-h5 line-clamp-2">{name}</h5>
              </Link>
              <div className="hidden sm:flex gap-4 text-description md:text-body2">
                <span>Артикул:</span>
                <span>{sku}</span>
              </div>
              <div className="flex flex-col text-description md:text-body2 gap-2">
                <div className="flex items-center gap-4">
                  <span>Размер</span>
                  <Separator className="h-4/6" orientation="vertical" />
                  <span className="text-gray-middle md:text-body2">{size}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Цвет</span>
                  <Separator className="h-4/6" orientation="vertical" />
                  <span className="text-gray-middle md:text-description">
                    {color}
                  </span>
                </div>
              </div>
            </div>
            <div className="gap-2 h-min flex lg:hidden">
              <IconButton
                variant="secondary"
                className="border border-main"
                size={getButtonsSize()}
                disabled={isDecreaseDisabled(cartItem)}
                onClick={() => handleDecreaseQuantity(cartItem)}
              >
                <MinusIcon />
              </IconButton>
              <div className="flex justify-center w-20 lg:w-14 p-2 md:p-3 lg:p-2 bg-gray-light">
                <span className="text-body2">{quantity}</span>
              </div>
              <IconButton
                variant="secondary"
                className="border border-main"
                size={getButtonsSize()}
                disabled={isIncreaseDisabled(cartItem)}
                onClick={() => handleIncreaseQuantity(cartItem)}
              >
                <PlusIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-x-4 lg:grid-cols-cartCard justify-between w-full h-min items-start">
            <div className="flex flex-col gap-2 items-center justify-self-start lg:justify-self-center">
              <span className="inline-block lg:hidden text-gray-middle text-table-header w-full">
                Цена
              </span>
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
            {isInStock ? (
              <>
                <div className="gap-2 h-min hidden lg:flex">
                  <IconButton
                    variant="secondary"
                    className="border border-main"
                    size="small"
                    disabled={isDecreaseDisabled(cartItem)}
                    onClick={() => handleDecreaseQuantity(cartItem)}
                  >
                    <MinusIcon />
                  </IconButton>
                  <div className="flex justify-center w-14 p-2 bg-gray-light">
                    <span className="text-body2">{quantity}</span>
                  </div>
                  <IconButton
                    variant="secondary"
                    className="border border-main"
                    size="small"
                    disabled={isIncreaseDisabled(cartItem)}
                    onClick={() => handleIncreaseQuantity(cartItem)}
                  >
                    <PlusIcon />
                  </IconButton>
                </div>
                <div className="flex flex-col gap-2 justify-center justify-self-end lg:justify-self-center">
                  <span className="inline-block lg:hidden text-gray-middle text-table-header w-full">
                    Сумма
                  </span>
                  <span>
                    {sumPrice} {currencySymbol}
                  </span>
                </div>
              </>
            ) : (
              <div className="col-span-2 justify-items-end">
                <Chip className="w-min" variant="gray" size="medium">
                  Нет на складе
                </Chip>
              </div>
            )}
            <div className="justify-center hidden lg:flex">
              <button
                onClick={() => {
                  deleteCartItem({ key });
                }}
                data-tooltip-id="cart-delete"
                data-tooltip-content="Удалить товар"
              >
                <TrashIcon className=" hover:stroke-red" />
                <StyledTooltip id="cart-delete" />
              </button>
            </div>
          </div>
          {renderButtons && renderButtons(cartItem)}
        </div>
      </div>
      <div className="flex md:hidden flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-h1-table sm:text-button-xs text-gray-middle">
              Цена
            </span>
            <span className="text-button-normal">
              {price} {currencySymbol}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-h1-table sm:text-button-xs text-gray-middle">
              Сумма
            </span>
            <span className="text-button-normal">
              {sumPrice} {currencySymbol}
            </span>
          </div>
        </div>
        <CartDefaultCardMenu cartItem={cartItem}>
          <Button className="w-full" size="small" variant="secondary">
            Другие действия
          </Button>
        </CartDefaultCardMenu>
      </div>
    </article>
  );
};

export default CartDefaultCard;

export const CartDefaultCardLoader = () => {
  return (
    <div className="w-full py-8 border-b border-gray last:border-0">
      <div className="grid grid-cols-[520px_1fr] gap-x-12">
        <div className="flex gap-6">
          <Skeleton className="w-[120px] shrink-0 h-full" />
          <div className="flex flex-col gap-6">
            <Skeleton className=" w-[220px] h-[22px]" />
            <Skeleton className=" w-[180px] h-[24px]" />
            <div className="flex flex-col gap-2">
              <Skeleton className=" w-[140px] h-[24px]" />
              <Skeleton className=" w-[140px] h-[24px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-cartCard justify-between w-full h-min items-start">
            <div className="flex flex-col gap-2 items-center">
              <Skeleton className=" w-[100px] h-[18px]" />
            </div>
            <div className="flex gap-2 h-min">
              <IconButtonLoader size="small" />
              <Skeleton className="w-[80px] h-[40px]" />
              <IconButtonLoader size="small" />
            </div>
            <div className="flex justify-center">
              <Skeleton className="w-[100px] h-[18px]" />
            </div>
            <div className="flex justify-center">
              <Skeleton className="size-[40px]" />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <IconButtonLoader size="small" />
            <IconButtonLoader size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};
