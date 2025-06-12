"use client";

import { getRelatedProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductsScrollableSection from "@/features/Products/components/ProductsScrollableSection";
import { useQuery } from "@tanstack/react-query";

const FavoriteSimilarProducts = () => {
  // const { data: cart } = useCart();

  // const cartProductIds = cart?.items.map((item) => item.parent_id);

  const { data, isPending } = useQuery(
    getRelatedProductsQueryOptions({
      product_ids: [580],
      per_page: 20,
    })
  );
  return (
    <ProductsScrollableSection
      title="Похожие товары /"
      data={data}
      isLoading={isPending}
    />
  );
};

export default FavoriteSimilarProducts;
