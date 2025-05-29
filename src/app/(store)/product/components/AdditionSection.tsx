"use client";

import { useGetProductId } from "@/features/Products/hooks/useGetProductId";
import { useGetProductById } from "@/features/Products/hooks/useGetProductById";
import { useQuery } from "@tanstack/react-query";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductsScrollableSection from "@/features/Products/components/ProductsScrollableSection";

const AdditionSection = () => {
  const { id } = useGetProductId("productId");

  const { data: product } = useGetProductById(id);

  const { data, isLoading } = useQuery({
    ...getProductsQueryOptions({ include: product?.cross_sell_ids }),
    enabled: !!product?.cross_sell_ids.length,
  });

  if (!product?.cross_sell_ids.length) return null;
  return (
    <ProductsScrollableSection
      title="Дополните свой образ"
      data={data?.items}
      isLoading={isLoading}
    />
  );
};

export default AdditionSection;
