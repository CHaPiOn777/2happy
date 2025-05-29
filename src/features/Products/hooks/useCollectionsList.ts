import { useEffect } from "react";
import { useCatalogStore } from "../store/catalogStore";
import { getProductsInfiniteQueryOptions } from "../api/productsApi";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCollectionsList = ({
  category,
  tag,
}: {
  category?: number;
  tag?: number;
}) => {
  const { sort, gridType, setTotalItems, setTotalPages } = useCatalogStore();

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
      type: "grouped",
      tag,
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
