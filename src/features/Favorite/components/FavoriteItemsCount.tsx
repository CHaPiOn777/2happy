"use client";

import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/shared/utils";
import { useGetAllFavorite } from "../api/favoriteApi";

const FavoriteItemsCount = ({
  className,
}: ComponentPropsWithoutRef<"span">) => {
  const { data: favorites } = useGetAllFavorite();

  if (!favorites?.totalCount) return null;

  return (
    <span
      className={cn(
        "absolute size-4 -top-1 -right-1.5 bg-red rounded-full text-white text-[12px]",
        className
      )}
    >
      {favorites.totalCount}
    </span>
  );
};

export default FavoriteItemsCount;
