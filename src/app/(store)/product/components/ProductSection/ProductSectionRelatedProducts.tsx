"use client";

import ProductCard from "@/features/Products/components/Cards/ProductCard";
import { ProductServer } from "@/features/Products/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";
import { ScrollArea } from "@/shared/components/UI/ScrollArea";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";

const ProductSectionRelatedProducts = ({
  products,
}: {
  products: ProductServer[] | undefined;
}) => {
  const isTablet = useMediaCustom("lg");

  if (isTablet)
    return (
      <Accordion type="multiple">
        <AccordionItem value="relatedProducts">
          <AccordionTrigger className="text-h5">
            Похожие товары
          </AccordionTrigger>
          <AccordionContent>
            <ScrollArea type="auto" orientation="horizontal">
              <div className="grid grid-flow-col auto-cols-[196px] gap-x-6 grid-rows-[376px] mb-6">
                {products?.map((item) => (
                  <ProductCard
                    key={item.id}
                    product={item}
                    showAttributes={false}
                  />
                ))}
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );

  return (
    <div className="flex flex-col gap-12">
      <h3 className="text-h3">Похожие товары /</h3>
      <ul className="grid grid-cols-3 auto-rows-[376px] gap-x-6 gap-y-6">
        {products?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSectionRelatedProducts;
