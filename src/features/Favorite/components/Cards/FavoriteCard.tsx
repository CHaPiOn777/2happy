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
import { useRemoveFromFavorite } from "../../api/favoriteApi";
import { Skeleton } from "@/shared/components/UI/Skeleton";
import { useAddToCart } from "@/features/Cart/api/cartMutations";
import { cn } from "@/shared/utils";
import { useChangeFavoriteQuantity } from "../../hooks/useChangeFavoriteQuantity";

const FavoriteCard = ({ favorite }: { favorite: FavoriteProduct }) => {
  const {
    id,
    name,
    isOnSale,
    variationId,
    regularPrice,
    salePrice,
    salePercent,
    currencySymbol,
    quantity,
    isInStock,
    image,
  } = getFavoriteItemInfo(favorite);

  const chip = getFavoriteChip(favorite);

  const { mutate: removeFromFavorite } = useRemoveFromFavorite({});

  const { mutate: addToCart, isPending } = useAddToCart({
    onSuccess: () => {
      removeFromFavorite(id);
    },
  });

  const handleDelete = () => removeFromFavorite(id);
  const handleAddToCart = () => {
    addToCart({ quantity, id: variationId });
  };

  const {
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    isDecreaseDisabled,
    isIncreaseDisabled,
  } = useChangeFavoriteQuantity();

  return (
    <article className="flex gap-12 w-full py-8 border-b border-gray">
      <ImageWithLoader
        wrapperClassName="w-[120px] h-[176px] shrink-0"
        src={image?.src ?? ""}
        alt={image?.alt ?? ""}
      />
      <div className="flex flex-col w-full justify-between pr-6 border-r border-gray">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-4">
            <h5 className="text-h5">{name}</h5>
            <Chip className="uppercase" variant={chip?.type} size="normal">
              {chip?.text}
            </Chip>
          </div>

          <div className="text-description lg:text-h5 flex flex-col items-center gap-2">
            <span className={"line-through text-gray-middle"}>
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
        <div className="flex justify-between gap-6">
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
          <IconButton
            className="border border-gray "
            variant="secondary"
            size="small"
            onClick={handleDelete}
          >
            <TrashIcon />
          </IconButton>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center h-auto">
        {isInStock && (
          <Button
            className={cn(isPending && "animate-pulse duration-1000")}
            size="medium"
            disabled={isPending}
            onClick={handleAddToCart}
          >
            В корзину
          </Button>
        )}
        <Button variant="secondary" size="medium">
          Изменить
        </Button>
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
