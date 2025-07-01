"use client";

import { useGetAllFavorite } from "@/features/Favorite/api/favoriteQueries";
import { FavoriteProduct } from "@/features/Favorite/types";
import { getRelatedProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductsScrollableSection from "@/features/Products/components/ProductsScrollableSection";
import { useQuery } from "@tanstack/react-query";

const FavoriteSimilarProducts = () => {
  const { data: favorites } = useGetAllFavorite();
  const productIds = favorites?.data.map((item) => item.parent_id) ?? [];

  const { data, isPending } = useQuery({
    ...getRelatedProductsQueryOptions({
      product_ids: productIds,
      per_page: 20,
    }),
    enabled: !!productIds.length,
  });
  return (
    <ProductsScrollableSection
      title="Похожие товары /"
      data={data}
      disabled={!productIds.length}
      isLoading={isPending}
    />
  );
};

export default FavoriteSimilarProducts;
