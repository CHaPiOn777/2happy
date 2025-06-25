"use client";

import { useCart } from "@/features/Cart/api/cartQueries";
import { getRelatedProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductsScrollableSection from "@/features/Products/components/ProductsScrollableSection";
import { useQuery } from "@tanstack/react-query";

const CartSimilarProducts = () => {
  const { data: cart } = useCart();

  const cartProductIds = cart?.items.map((item) => item.parent_id);

  const { data, isPending } = useQuery({
    ...getRelatedProductsQueryOptions({
      product_ids: cartProductIds,
      per_page: 20,
    }),
    enabled: !!cartProductIds?.length,
  });
  return (
    <ProductsScrollableSection
      title="Похожие товары /"
      data={data}
      isLoading={isPending}
      disabled={!cartProductIds?.length}
    />
  );
};

export default CartSimilarProducts;
