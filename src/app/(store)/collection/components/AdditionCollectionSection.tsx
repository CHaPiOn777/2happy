"use client";

import { useGetProductId } from "@/features/Products/hooks/useGetProductId";
import { useGetProductById } from "@/features/Products/hooks/useGetProductById";
import { useQuery } from "@tanstack/react-query";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductsScrollableSection from "@/features/Products/components/ProductsScrollableSection";
import CollectionCard from "@/features/Products/components/Cards/CollectionCard";

const AdditionCollectionSection = () => {
  const { id } = useGetProductId("collectionId");

  const { data: product } = useGetProductById(id);

  const { data, isLoading } = useQuery({
    ...getProductsQueryOptions({
      per_page: 10,
      category: product?.categories.at(-1)?.id,
      type: "grouped",
    }),
  });

  const filteredData = data?.items.filter((item) => item.id != id);

  return (
    <ProductsScrollableSection
      title="Посмотреть ещё образы"
      data={filteredData}
      isLoading={isLoading}
      renderCard={(product) => (
        <CollectionCard key={product.id} product={product} />
      )}
    />
  );
};

export default AdditionCollectionSection;
