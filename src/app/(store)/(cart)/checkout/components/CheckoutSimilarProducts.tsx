"use client";

import { useCart } from "@/features/Cart/api/cartQueries";
import { useCheckoutStore } from "@/features/Checkout/store/checkoutStore";
import { getRelatedProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductsScrollableSection from "@/features/Products/components/ProductsScrollableSection";
import { useQuery } from "@tanstack/react-query";

const CheckoutSimilarProducts = () => {
  const { checkoutItems } = useCheckoutStore();

  const checkoutProductIds = checkoutItems?.map((item) => item.parentId);

  const { data, isPending } = useQuery(
    getRelatedProductsQueryOptions({
      product_ids: checkoutProductIds,
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

export default CheckoutSimilarProducts;
