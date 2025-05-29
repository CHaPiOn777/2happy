"use client";

import { useQuery } from "@tanstack/react-query";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import ProductsScrollableSection from "@/features/Products/components/ProductsScrollableSection";
import { useGetProductId } from "@/features/Products/hooks/useGetProductId";

const RecentSection = () => {
  const { id: productId } = useGetProductId("productId");
  const [recentProducts, _] = useLocalStorage<number[]>("recentProducts", []);

  const filteredRecentProducts = recentProducts.filter((id) => id != productId);

  const { data, isFetching } = useQuery({
    ...getProductsQueryOptions({ include: filteredRecentProducts }),
    enabled: !!filteredRecentProducts.length,
  });
  return (
    <ProductsScrollableSection
      title="Недавно просмотренные /"
      data={data?.items}
      isLoading={isFetching}
    />
  );
};

export default RecentSection;
