import { useEffect, useMemo, useRef, useState } from "react";
import {
  useAddToFavorite,
  useGetAllFavorite,
  useRemoveFromFavorite,
} from "../api/favoriteQueries";
import { FavoriteProduct } from "../types";

export const useToggleFavorite = (favorite: FavoriteProduct | null) => {
  const { data: favorites } = useGetAllFavorite();

  const isFavorite = useMemo(
    () => !!favorites?.data.find((item) => item.id === favorite?.id),
    [favorites, favorite]
  );

  const [disabled, setDisabled] = useState<boolean>(false);
  const disabledTimerRef = useRef<NodeJS.Timeout>(null);

  const { mutate: addToFavorite } = useAddToFavorite({});
  const { mutate: removeFromFavorite } = useRemoveFromFavorite({});

  const abortControllerRef = useRef<AbortController>(null);

  const handleToggle = () => {
    if (!favorite || disabled) return;

    abortControllerRef.current?.abort();

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    if (!isFavorite) {
      addToFavorite({ item: favorite, signal: abortController.signal });
    } else {
      removeFromFavorite({ id: favorite.id, signal: abortController.signal });
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
