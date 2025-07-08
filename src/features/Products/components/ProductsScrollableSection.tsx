import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import ProductCard from "./Cards/ProductCard";

import { ScrollArea, ScrollBar } from "@/shared/components/UI/ScrollArea";
import { ProductCardLoader } from "./Cards/ProductCard";
import { ProductServer } from "../types";
import { cn } from "@/shared/utils";
import { Fragment, ReactNode } from "react";

import * as motion from "motion/react-client";

const defaultRenderCard = (product: ProductServer) => (
  <ProductCard product={product} />
);

const ProductsScrollableSection = ({
  title,
  data,
  isLoading,
  className,
  disabled,
  renderCard = defaultRenderCard,
}: {
  title: string;
  data: ProductServer[] | undefined;
  isLoading?: boolean;
  className?: string;
  disabled?: boolean;
  renderCard?: (product: ProductServer) => ReactNode;
}) => {
  if ((!isLoading && (!data || !data.length)) || disabled) return null;

  return (
    <Section className="block">
      <Container
        className={cn(
          "flex flex-col gap-8 sm:gap-12 lg:gap-16 my-12 sm:my-20 lg:my-section",
          className
        )}
      >
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, type: "tween" }}
          className="text-h2"
        >
          {title}
        </motion.h2>
        <ScrollArea orientation="horizontal" type="always">
          <div className="grid grid-flow-col auto-cols-[calc(100vw-32px)] xs:auto-cols-[216px] md:auto-cols-[288px] grid-rows-[472px] md:grid-rows-[552px] gap-4 sm:gap-6 mb-6">
            {isLoading && (
              <>
                <ProductCardLoader />
                <ProductCardLoader />
                <ProductCardLoader />
                <ProductCardLoader />
              </>
            )}
            {data?.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "tween" }}
                viewport={{ once: true }}
              >
                {renderCard(product)}
              </motion.div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Container>
    </Section>
  );
};

export default ProductsScrollableSection;
