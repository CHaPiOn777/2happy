"use client";

import { cn } from "@/shared/utils/cn";

import { ProductCardLoader } from "../Cards/ProductServerCard";
import { RefObject, useRef } from "react";
import useObserver from "@/shared/hooks/useObserver";
import { useCollectionsList } from "../../hooks/useCollectionsList";
import CollectionCard, { CollectionCardLoader } from "../Cards/CollectionCard";

const CollectionsList = ({
  scrollToRef,
  category,
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
  } = useCollectionsList({
    category,
  });

  const observerRef = useRef<HTMLDivElement>(null);

  useObserver(observerRef, () => {
    fetchNextPage();
  });

  const noResults = !isPending && !data?.items.length;

  if (noResults) {
    return (
      <div className="flex items-center justify-center w-full h-[440px] md:h-[456px]">
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
          "grid gap-x-6 gap-y-10 grid-flow-row",
          gridType === "small"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[440px] md:auto-rows-[456px] min-h-[440px] md:min-h-[456px]"
            : "grid-cols-2 auto-rows-[928px] min-h-[928px]",
          isPlaceholderData && "blur-sm pointer-events-none"
        )}
      >
        {isPending && (
          <>
            <CollectionCardLoader />
            <CollectionCardLoader />
            <CollectionCardLoader />
            <CollectionCardLoader />
          </>
        )}

        {data?.items.map((product) => (
          <CollectionCard key={product.id} product={product} />
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

export default CollectionsList;
