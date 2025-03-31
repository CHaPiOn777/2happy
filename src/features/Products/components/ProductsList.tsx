import { useQuery } from "@tanstack/react-query";
import { getProductsQueryOptions } from "../api/productsApi";
import { useEffect } from "react";
import { useCatalogStore } from "../store/catalogStore";
import ProductServerCard from "./ProductCards/ProductServerCard";
import { cn } from "@/lib/utils";
import { usePaginationStore } from "../store/paginationStore";
import ProductCardLoader from "./ProductCards/ProductCardLoader";
import { useFiltersStore } from "../store/filtersStore";

const ProductsList = ({ category }: { category?: number }) => {
  const { sort, gridType } = useCatalogStore();
  const { page, per_page } = usePaginationStore();
  const { priceRange } = useFiltersStore();

  const { data, isPending, isPlaceholderData } = useQuery({
    ...getProductsQueryOptions({
      page,
      per_page,
      category,
      min_price: priceRange?.min,
      max_price: priceRange?.max,
      order: sort.type,
      orderby: sort.field,
    }),
    placeholderData: (previousData) => previousData,
  });
  const { setTotalItems, setTotalPages } = useCatalogStore();

  useEffect(() => {
    if (data) {
      setTotalItems(+data.totalItems);
      setTotalPages(+data.totalPages);
    }
  }, [data]);

  if (!isPending && !data?.items.length) {
    return (
      <div className="flex items-center justify-center w-full h-[552px]">
        <h2 className="text-h2">Ничего не найдено</h2>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-x-6 gap-y-10 grid-flow-row",
        gridType === "small"
          ? "grid-cols-4 auto-rows-[552px] min-h-[552px]"
          : "grid-cols-2 auto-rows-[928px] min-h-[928px]",
        isPlaceholderData && "opacity-60 pointer-events-none"
      )}
    >
      {isPending && !isPlaceholderData && (
        <>
          <ProductCardLoader />
          <ProductCardLoader />
          <ProductCardLoader />
          <ProductCardLoader />
        </>
      )}

      {data?.items.map((product) => (
        <ProductServerCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
