import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import ProductServerCard from "./Cards/ProductServerCard";

import { ScrollArea, ScrollBar } from "@/shared/components/UI/ScrollArea";
import { ProductCardLoader } from "./Cards/ProductServerCard";
import { ProductServer } from "../types";
import { cn } from "@/shared/utils";
import { Fragment, ReactNode } from "react";

const defaultRenderCard = (product: ProductServer) => (
  <ProductServerCard product={product} />
);

const ProductsScrollableSection = ({
  title,
  data,
  isLoading,
  className,
  renderCard = defaultRenderCard,
}: {
  title: string;
  data: ProductServer[] | undefined;
  isLoading?: boolean;
  className?: string;
  renderCard?: (product: ProductServer) => ReactNode;
}) => {
  if (!isLoading && (!data || !data.length)) return null;

  return (
    <Section className="block">
      <Container
        className={cn(
          "flex flex-col gap-8 sm:gap-12 lg:gap-16 my-12 sm:my-20 lg:my-section",
          className
        )}
      >
        <h2 className="text-h2">{title}</h2>
        <ScrollArea>
          <div className="grid grid-flow-col auto-cols-[216px] md:auto-cols-[288px] grid-rows-[472px] md:grid-rows-[552px] gap-4 sm:gap-6 mb-6">
            {isLoading && (
              <>
                <ProductCardLoader />
                <ProductCardLoader />
                <ProductCardLoader />
                <ProductCardLoader />
              </>
            )}
            {data?.map((product) => (
              <Fragment key={product.id}>{renderCard(product)}</Fragment>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Container>
    </Section>
  );
};

export default ProductsScrollableSection;
