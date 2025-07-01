"use client";

import { tagIds } from "@/features/Categories/consts/consts";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductServerCard from "@/features/Products/components/Cards/ProductServerCard";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";
import { ScrollArea, ScrollBar } from "@/shared/components/UI/ScrollArea";
import { useHasMounted } from "@/shared/hooks/useHasMounted";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import { useSuspenseQuery } from "@tanstack/react-query";

const FinalSaleList = () => {
  const isMedium = useMediaCustom("md");

  const hasMounted = useHasMounted();

  const { data } = useSuspenseQuery(
    getProductsQueryOptions({
      tag: tagIds["final_sale"],
      exclude_type: "grouped",
      per_page: isMedium && hasMounted ? 9 : 3,
    })
  );

  return (
    <ScrollArea type="always" orientation="horizontal">
      <div className="grid grid-flow-col pb-8 md:pb-0 auto-cols-[218px] md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {data.items.map((product) => (
          <AnimatedInView
            key={product.id}
            id="home-sale-list"
            as="div"
            transition={{ duration: 0.6, type: "tween" }}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[504px] md:h-[544px] md:first:hidden lg:first:block"
          >
            <ProductServerCard product={product} />
          </AnimatedInView>
        ))}
      </div>
      <ScrollBar
        initialProgress={10}
        minTriggerPercent={10}
        orientation="horizontal"
        className="md:opacity-0"
      />
    </ScrollArea>
  );
};

export default FinalSaleList;
