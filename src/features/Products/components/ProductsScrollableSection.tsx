import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import ProductServerCard from "./Cards/ProductServerCard";

import { ScrollArea, ScrollBar } from "@/shared/components/UI/ScrollArea";
import { ProductCardLoader } from "./Cards/ProductServerCard";
import { ProductServer } from "../types";
import { cn } from "@/shared/utils";
import { ReactNode } from "react";

const defaultRenderCard = (product: ProductServer) => (
  <ProductServerCard key={product.id} product={product} />
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
      <Container className={cn("flex flex-col gap-16 my-section", className)}>
        <h2 className="text-h2">{title}</h2>
        <ScrollArea>
          <div className="grid grid-flow-col auto-cols-[288px] gap-6 h-[552px] mb-6">
            {isLoading && (
              <>
                <ProductCardLoader />
                <ProductCardLoader />
                <ProductCardLoader />
                <ProductCardLoader />
              </>
            )}
            {data?.map((product) => (
              <>{renderCard(product)}</>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Container>
    </Section>
  );
};

export default ProductsScrollableSection;
