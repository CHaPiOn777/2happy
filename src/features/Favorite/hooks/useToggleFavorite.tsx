import { useEffect, useMemo, useRef, useState } from "react";
import {
  useAddToFavorite,
  useGetAllFavorite,
  useRemoveFromFavorite,
} from "../api/favoriteApi";
import { FavoriteProduct } from "../api/indexedApi";

export const useToggleFavorite = (favorite: FavoriteProduct | null) => {
  const { data: favorites } = useGetAllFavorite();

  const isFavorite = useMemo(
    () => !!favorites?.find((item) => item.id === favorite?.id),
    [favorites, favorite]
  );

  const [disabled, setDisabled] = useState<boolean>(false);

  const disabledTimerRef = useRef<NodeJS.Timeout>(null);

  const { mutate: addToFavorite } = useAddToFavorite({
    onError: () => {
      console.log("ошибка при добавлении");
      // setIsFavorite(false);
    },
  });

  const { mutate: removeFromFavorite } = useRemoveFromFavorite({
    onError: () => {
      console.log("ошибка при удалении");
      // setIsFavorite(true);
    },
  });

  const handleToggle = () => {
    if (!favorite || disabled) return;
    if (!isFavorite) {
      addToFavorite(favorite);
    } else {
      removeFromFavorite(favorite.id);
    }

    setDisabled(true);
    disabledTimerRef.current = setTimeout(() => {
      setDisabled(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (disabledTimerRef.current) clearTimeout(disabledTimerRef.current);
    };
  }, []);

  return { isFavorite, handleToggle };
};
