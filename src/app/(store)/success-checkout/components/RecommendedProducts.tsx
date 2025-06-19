"use client";

import { useGetOrder } from "@/features/Orders/api/ordersApi";
import { getRelatedProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductsScrollableSection from "@/features/Products/components/ProductsScrollableSection";
import { useQuery } from "@tanstack/react-query";

const RecommendedProducts = ({ orderId }: { orderId: number }) => {
  const { data: order } = useGetOrder({ id: orderId });

  const itemsIds = order?.line_items.map((item) => item.product_id) ?? [];

  const { data, isPending } = useQuery({
    ...getRelatedProductsQueryOptions({
      product_ids: itemsIds,
      per_page: 20,
    }),
    enabled: !!order,
  });
  return (
    <ProductsScrollableSection
      title="Рекомендуемые товары /"
      className="sm:my-12"
      data={data}
      isLoading={isPending}
    />
  );
};

export default RecommendedProducts;
