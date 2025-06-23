import { useClearFavorites } from "@/features/Favorite/api/favoriteQueries";
import { FavoriteProduct } from "@/features/Favorite/types";
import { Button } from "@/shared/components/UI/Button";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";

const FavoriteSectionButtons = ({
  favorites,
}: {
  favorites: FavoriteProduct[];
}) => {
  const isMobile = useMediaCustom("small");
  const { mutate: clearFavorites } = useClearFavorites();

  const handleClearFavorites = () => clearFavorites({});
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-end">
      <Button
        className="w-full lg:w-max"
        variant="secondary"
        size={isMobile ? "medium" : "normal"}
        onClick={handleClearFavorites}
      >
        Очистить избраное
      </Button>
      <Button size={isMobile ? "medium" : "normal"} className="w-full lg:w-max">
        Добавить в корзину
      </Button>
    </div>
  );
};

export default FavoriteSectionButtons;
