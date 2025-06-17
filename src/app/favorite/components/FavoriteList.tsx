"use client";

import FavoriteCard from "@/features/Favorite/components/Cards/FavoriteCard";
import { FavoriteProduct } from "@/features/Favorite/types";

const FavoriteList = ({ favorites }: { favorites: FavoriteProduct[] }) => {
  return (
    <div>
      {favorites?.map((favorite) => (
        <FavoriteCard key={favorite.id} favorite={favorite} />
      ))}
    </div>
  );
};

export default FavoriteList;
