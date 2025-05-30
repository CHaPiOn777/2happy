import { useEffect } from "react";
import { useCatalogStore } from "../store/catalogStore";
import { getProductsInfiniteQueryOptions } from "../api/productsApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useFiltersStore } from "../store/filtersStore";

export const useProductsList = ({
  category,
  tag,
}: {
  category?: number;
  tag?: number;
}) => {
  const { sort, gridType, setTotalItems, setTotalPages } = useCatalogStore();
  const { priceRange, colors, sizes } = useFiltersStore();

  const {
    data,
    isPending,
    isPlaceholderData,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    ...getProductsInfiniteQueryOptions({
      per_page: 12,
      category,
      tag,
      exclude_type: "grouped",
      color: colors.map((item) => item.id),
      size: sizes.map((item) => item.id),
      min_price: priceRange?.min,
      max_price: priceRange?.max,
      order: sort.type,
      orderby: sort.field,
    }),
    select: (result) => ({
      totalPages: result.pages[0].totalPages,
      items: result.pages.map((item) => item.items).flat(),
      totalItems: result.pages[0].totalItems,
    }),
  });

  useEffect(() => {
    if (data) {
      setTotalItems(+data.totalItems);
      setTotalPages(+data.totalPages);
    }

    return () => {
      setTotalItems(0);
      setTotalPages(1);
    };
  }, [data]);

  return {
    data,
    gridType,
    isPending,
    isPlaceholderData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
