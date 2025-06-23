import MinusIcon from "@/shared/components/icons/MinusIcon";
import PlusIcon from "@/shared/components/icons/PlusIcon";
import TrashIcon from "@/shared/components/icons/TrashIcon";
import { Button, ButtonLoader } from "@/shared/components/UI/Button";
import { Chip } from "@/shared/components/UI/Chip";
import { IconButton } from "@/shared/components/UI/IconButton";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { FavoriteProduct } from "../../types";
import { getFavoriteItemInfo } from "../../utils/getFavoriteItemInfo";
import { getFavoriteChip } from "../../utils/getFavoriteChip";
import { useRemoveFromFavorite } from "../../api/favoriteQueries";
import { Skeleton } from "@/shared/components/UI/Skeleton";
import { useAddToCart } from "@/features/Cart/api/cartMutations";
import { cn } from "@/shared/utils";
import { useChangeFavoriteQuantity } from "../../hooks/useChangeFavoriteQuantity";
import FavoriteChangeDialog from "../Dialogs/FavoriteChangeDialog";
import Link from "next/link";
import { paths } from "@/config/paths";
import FavoriteAddToCartDialog from "../Dialogs/FavoriteAddToCartDialog";
import { Separator } from "@/shared/components/UI/Separator";
import AddToCartIcon from "@/shared/components/icons/AddToCartIcon";
import EditIcon from "@/shared/components/icons/EditIcon";

const FavoriteCard = ({ favorite }: { favorite: FavoriteProduct }) => {
  const {
    id,
    name,
    isOnSale,
    parentId,
    parentSlug,
    regularPrice,
    salePrice,
    salePercent,
    currencySymbol,
    color,
    size,
    quantity,
    isInStock,
    image,
  } = getFavoriteItemInfo(favorite);

  const chip = getFavoriteChip(favorite);

  const { mutate: removeFromFavorite } = useRemoveFromFavorite({});

  const handleDelete = () => removeFromFavorite({ id });

  const {
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    isDecreaseDisabled,
    isIncreaseDisabled,
  } = useChangeFavoriteQuantity();

  return (
    <article className="flex gap-4 md:gap-12 w-full py-6 md:py-8 border-b border-gray last:border-b-0">
      <div className="relative">
        <ImageWithLoader
          textClassName="text-lg"
          wrapperClassName="w-[96px] md:w-[120px] h-[176px] shrink-0"
          src={image?.src ?? ""}
          alt={image?.alt ?? ""}
        />
        <Chip
          className="absolute bottom-0 w-full capitalize py-1 justify-center flex md:hidden"
          variant={chip?.type}
          size="normal"
        >
          {chip?.text}
        </Chip>
      </div>
      <div className="relative flex flex-col w-full justify-between md:pr-6 md:border-r border-gray">
        <div className="flex justify-between gap-4">
          <div className="w-full flex flex-col gap-4">
            <div className="flex w-full justify-between gap-4">
              <Link
                href={paths.product.getHref(parentId, parentSlug, {
                  color,
                  size,
                })}
              >
                <h5 className="text-body2 sm:text-h5">{name}</h5>
              </Link>
              {isInStock && (
                <FavoriteAddToCartDialog favoriteItem={favorite}>
                  <IconButton
                    className={cn(
                      "absolute right-0 top-0 border border-gray inline- flex md:hidden"
                    )}
                    variant="secondary"
                    size="medium"
                  >
                    <AddToCartIcon />
                  </IconButton>
                </FavoriteAddToCartDialog>
              )}
            </div>
            <div className="text-description sm:text-h5 flex md:hidden items-center gap-2">
              <span
                className={`${isOnSale && "line-through text-gray-middle"}`}
              >
                {regularPrice} ₸
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
            {isInStock && (
              <div className="flex md:hidden flex-row lg:flex-col gap-2 text-description sm:text-body2">
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
            )}
            <Chip
              className="uppercase hidden md:block"
              variant={chip?.type}
              size="normal"
            >
              {chip?.text}
            </Chip>
          </div>

          <div className="text-h5 hidden md:flex flex-col items-center gap-2">
            <span
              className={`${
                isOnSale && "line-through whitespace-nowrap text-gray-middle"
              }`}
            >
              {regularPrice} ₸
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
        </div>
        <div className="flex justify-between gap-2 md:gap-6">
          {isInStock && (
            <div className="flex gap-2">
              <IconButton
                className="border border-gray"
                variant="secondary"
                size="small"
                onClick={() => handleDecreaseQuantity(favorite)}
                disabled={isDecreaseDisabled(favorite)}
              >
                <MinusIcon />
              </IconButton>
              <div className="text-body2 py-2 px-8 bg-gray-light">
                {quantity}
              </div>
              <IconButton
                className="border border-gray "
                variant="secondary"
                size="small"
                onClick={() => handleIncreaseQuantity(favorite)}
                disabled={isIncreaseDisabled(favorite)}
              >
                <PlusIcon />
              </IconButton>
            </div>
          )}
          <div className="flex items-center gap-4">
            <IconButton
              className="border border-gray hidden md:inline-flex"
              variant="secondary"
              size="small"
              onClick={handleDelete}
            >
              <TrashIcon />
            </IconButton>
            <button className="inline-flex md:hidden" onClick={handleDelete}>
              <TrashIcon />
            </button>
            <FavoriteChangeDialog favoriteItem={favorite}>
              <button className="inline-flex md:hidden">
                <EditIcon className="size-6" />
              </button>
            </FavoriteChangeDialog>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-6 items-center justify-center h-auto">
        {isInStock && (
          <FavoriteAddToCartDialog favoriteItem={favorite}>
            <Button size="medium">В корзину</Button>
          </FavoriteAddToCartDialog>
        )}
        <FavoriteChangeDialog favoriteItem={favorite}>
          <Button variant="secondary" size="medium">
            Изменить
          </Button>
        </FavoriteChangeDialog>
      </div>
    </article>
  );
};

export default FavoriteCard;

export const FavoriteCardLoader = () => {
  return (
    <article className="flex gap-12 w-full py-8 border-b border-gray">
      <Skeleton className="w-[120px] h-[176px] shrink-0" />
      <div className="flex flex-col w-full justify-between pr-6 border-r border-gray">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-4">
            <Skeleton className="w-[120px] h-[24px] shrink-0" />
          </div>

          <div className="text-description lg:text-h5 flex flex-col items-center gap-2">
            <Skeleton className="w-[120px] h-[24px] shrink-0" />
            <Skeleton className="w-[150px] h-[24px] shrink-0" />
            <Skeleton className="w-[80px] h-[24px] shrink-0" />
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <div className="flex gap-2">
            <Skeleton className="w-[40px] h-[40px] shrink-0" />
            <Skeleton className="w-[40px] h-[40px] shrink-0" />
            <Skeleton className="w-[40px] h-[40px] shrink-0" />
          </div>
          <Skeleton className="w-[40px] h-[40px] shrink-0" />
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center h-auto">
        <ButtonLoader size="medium" />
        <ButtonLoader size="medium" />
      </div>
    </article>
  );
};
