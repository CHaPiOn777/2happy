import ToggleFavorite from "@/features/Favorite/components/ToggleFavorite";
import HeartIcon from "@/shared/components/icons/HeartIcon";
import { ProductServer } from "../../types";
import { cn } from "@/shared/utils";
import { useHasMounted } from "@/shared/hooks/useHasMounted";

const ProductFavoriteButton = ({ product }: { product: ProductServer }) => {
  const isFavoriteDisabled = !product.defaultVariation;

  const hasMounted = useHasMounted();
  return (
    <ToggleFavorite
      className="absolute top-4 right-4 z-30 opacity-100 lg:opacity-0 group-hover/product:opacity-100 transition-opacity"
      product={product}
      variation={product.defaultVariation}
    >
      {(isFavorite, handleToggle) => (
        <HeartIcon
          role="button"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            handleToggle();
          }}
          className={cn(
            " hover:fill-main",
            isFavorite && hasMounted && "fill-main",
            isFavoriteDisabled && "opacity-40 hover:fill-transparent"
          )}
        />
      )}
    </ToggleFavorite>
  );
};

export default ProductFavoriteButton;
