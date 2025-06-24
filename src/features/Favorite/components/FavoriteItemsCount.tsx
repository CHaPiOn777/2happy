"use client";

import { ComponentPropsWithoutRef, useMemo } from "react";
import { cn } from "@/shared/utils";
import { useGetAllFavorite } from "../api/favoriteQueries";

const FavoriteItemsCount = ({
  className,
}: ComponentPropsWithoutRef<"span">) => {
  const { data: favorites } = useGetAllFavorite();

  const totalCount = useMemo(
    () => favorites?.data.reduce((acc, item) => (acc += item.quantity), 0),
    [favorites]
  );

  if (!totalCount) return null;

  return (
    <span
      className={cn(
        "absolute -top-1 -right-1.5 bg-red rounded-full text-white text-[12px]",
        totalCount >= 10 ? "size-[18px]" : "size-4",
        className
      )}
    >
      {totalCount}
    </span>
  );
};

export default FavoriteItemsCount;
