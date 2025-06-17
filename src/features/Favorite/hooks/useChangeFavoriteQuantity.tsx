import { useUpdateFavoriteItem } from "../api/favoriteApi";
import { FavoriteProduct } from "../types";

export const useChangeFavoriteQuantity = () => {
  const { mutate: updateFavoriteItem } = useUpdateFavoriteItem({});

  const handleDecreaseQuantity = (favoriteItem: FavoriteProduct) =>
    updateFavoriteItem({
      id: favoriteItem.id,
      quantity: favoriteItem.quantity - 1,
    });

  const handleIncreaseQuantity = (favoriteItem: FavoriteProduct) =>
    updateFavoriteItem({
      id: favoriteItem.id,
      quantity: favoriteItem.quantity + 1,
    });

  const isDecreaseDisabled = (favoriteItem: FavoriteProduct) => {
    if (favoriteItem.stock_status != "instock") return true;

    return favoriteItem.quantity <= 1;
  };

  const isIncreaseDisabled = (favoriteItem: FavoriteProduct) => {
    if (favoriteItem.stock_status != "instock") return true;

    return favoriteItem.quantity >= Number(favoriteItem.stock_quantity);
  };

  return {
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    isDecreaseDisabled,
    isIncreaseDisabled,
  };
};
