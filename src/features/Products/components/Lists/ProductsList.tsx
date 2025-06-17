"use client";

import { cn } from "@/shared/utils/cn";
import { useProductsList } from "../../hooks/useProductsList";

import { ProductCardLoader } from "../Cards/ProductServerCard";
import ProductServerCard from "../Cards/ProductServerCard";
import { RefObject, useRef } from "react";
import useObserver from "@/shared/hooks/useObserver";

const ProductsList = ({
  scrollToRef,
  category,
  tag,
}: {
  scrollToRef?: RefObject<HTMLDivElement | null>;
  category?: number;
  tag?: number;
}) => {
  const {
    data,
    gridType,
    isPending,
    isPlaceholderData,
    fetchNextPage,
    isFetchingNextPage,
  } = useProductsList({
    category,
    tag,
  });

  const observerRef = useRef<HTMLDivElement>(null);

  useObserver(observerRef, () => {
    fetchNextPage();
  });

  const noResults = !isPending && !data?.items.length;

  if (noResults) {
    return (
      <div className="flex items-center justify-center w-full h-[552px]">
        <h2 className="text-h2">Ничего не найдено</h2>
      </div>
    );
  }

  return (
    <div ref={scrollToRef} className="relative">
      {isPlaceholderData && (
        <div className="absolute flex justify-center items-center w-full h-full pointer-events-none z-10">
          <h2 className="text-h1Akira animate-pulse">2HAPPY</h2>
        </div>
      )}
      <div
        className={cn(
          "grid gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-10 grid-flow-row",
          gridType === "small"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[510px] md:auto-rows-[552px] min-h-[510px] md:min-h-[552px]"
            : "grid-cols-2 auto-rows-[928px] min-h-[928px]",
          isPlaceholderData && "blur-sm pointer-events-none"
        )}
      >
        {isPending && (
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

      {isFetchingNextPage && (
        <h2 className="text-h2Akira w-full text-center animate-pulse mb-4 mt-10">
          2HAPPY
        </h2>
      )}
      <div ref={observerRef} className="w-full h-[1px]" />
      {data?.totalItems && (
        <div className="flex justify-end mt-8 ">
          {data?.items.length} из {data?.totalItems}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
