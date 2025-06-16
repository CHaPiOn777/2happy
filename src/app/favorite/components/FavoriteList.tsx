"use client";

import { FavoriteProduct } from "@/features/Favorite/api/indexedApi";
import FavoriteCard from "@/features/Favorite/components/Cards/FavoriteCard";

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
