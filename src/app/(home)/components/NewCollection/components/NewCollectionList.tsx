"use client";

import { tagIds } from "@/features/Categories/consts/consts";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductServerCard from "@/features/Products/components/Cards/ProductServerCard";
import { ScrollArea } from "@/shared/components/UI/ScrollArea";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SIZES_TW, SLIDES_SIZES } from "../consts";

const NewCollectionList = () => {
  const { data } = useSuspenseQuery(
    getProductsQueryOptions({
      tag: tagIds["new"],
      exclude_type: "grouped",
      per_page: 9,
    })
  );

  return (
    <div className="space-y-6">
      <h5 className="w-full text-right text-h5">
        Погрузитесь в мир стильных новинок!
      </h5>
      <ScrollArea orientation="horizontal">
        <div className="grid grid-flow-col auto-cols-[calc((100vw-32px-4px)/2)] xs:auto-cols-[216px] sm:auto-cols-[256px] mb-4 gap-2 xs:gap-4 grid-rows-[472px] sm:grid-rows-[552px]">
          {data.items.map((product, index) => {
            const size = SLIDES_SIZES[index];

            return (
              <ProductServerCard
                key={product.id}
                product={product}
                showAttributes={false}
                className={`${SIZES_TW[size]} w-auto`}
              />
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default NewCollectionList;
