import { useClearFavorites } from "@/features/Favorite/api/favoriteApi";
import { FavoriteProduct } from "@/features/Favorite/api/indexedApi";
import { Button } from "@/shared/components/UI/Button";

const FavoriteSectionButtons = ({
  favorites,
}: {
  favorites: FavoriteProduct[];
}) => {
  const { mutate: clearFavorites } = useClearFavorites();

  const handleClearFavorites = () => clearFavorites();
  return (
    <div className="flex gap-6 justify-end">
      <Button variant="secondary" onClick={handleClearFavorites}>
        Очистить избраное
      </Button>
      <Button>Добавить в корзину</Button>
    </div>
  );
};

export default FavoriteSectionButtons;
