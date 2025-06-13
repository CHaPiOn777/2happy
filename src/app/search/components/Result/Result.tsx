"use client";

import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductServerCard, {
  ProductCardLoader,
} from "@/features/Products/components/Cards/ProductServerCard";
import Container from "@/shared/components/UI/Container";
import { useQuery } from "@tanstack/react-query";
import NotFound from "../NotFound/NotFound";
import { JSX } from "react";
import { ProductServer } from "@/features/Products/types";
import CollectionCard from "@/features/Products/components/Cards/CollectionCard";

const PRODUCT_CARDS: Record<
  "simple" | "variable" | "grouped",
  (product: ProductServer) => JSX.Element
> = {
  simple: (product: ProductServer) => <ProductServerCard product={product} />,
  variable: (product: ProductServer) => <ProductServerCard product={product} />,
  grouped: (product: ProductServer) => <CollectionCard product={product} />,
};

const Result = ({ search }: { search: string }) => {
  const { data: products, isLoading } = useQuery(
    getProductsQueryOptions({
      search,
      per_page: 12,
    })
  );

  if (!isLoading && !products?.items.length)
    return <NotFound search={search} />;

  return (
    <Container className="mt-20 mb-20 lg:mt-24 lg:mb-section flex-col gap-12">
      <div>
        <h2 className="text-h3">Результаты поиска по запросу: {search}</h2>
      </div>
      {isLoading && (
        <div className="w-full grid gird-cols-3 lg:grid-cols-4 grid-rows-[552px] gap-x-6">
          <ProductCardLoader />
          <ProductCardLoader />
          <ProductCardLoader />
          <ProductCardLoader />
        </div>
      )}
      {products?.items && !isLoading && (
        <ul className="w-full grid grid-cols-3 lg:grid-cols-4 grid-flow-row auto-rows-[552px] gap-x-6">
          {products.items.map((product) => (
            <li key={product.id}>
              {PRODUCT_CARDS[product.type as "simple" | "variable" | "grouped"](
                product
              )}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Result;
