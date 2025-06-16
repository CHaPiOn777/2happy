"use client";

import { ComponentPropsWithoutRef, useMemo } from "react";
import { cn } from "@/shared/utils";
import { useGetAllFavorite } from "../api/favoriteApi";

const FavoriteItemsCount = ({
  className,
}: ComponentPropsWithoutRef<"span">) => {
  const { data: favorites } = useGetAllFavorite();

  const favoriteCount = useMemo(
    () => favorites?.reduce((acc, item) => (acc += item.quantity), 0),
    [favorites]
  );

  if (!favoriteCount) return null;

  return (
    <span
      className={cn(
        "absolute size-4 -top-1 -right-1.5 bg-red rounded-full text-white text-[12px]",
        className
      )}
    >
      {favoriteCount}
    </span>
  );
};

export default FavoriteItemsCount;
