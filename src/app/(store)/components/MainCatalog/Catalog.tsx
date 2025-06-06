"use client";

import CatalogControls from "./CatalogControls";
import ProductsList from "@/features/Products/components/Lists/ProductsList";
import Container from "@/shared/components/UI/Container";
import { ReactNode, useRef } from "react";

const Catalog = ({
  category,
  tag,
  filtersListSlot,
}: {
  category?: number;
  tag?: number;
  filtersListSlot: ReactNode;
}) => {
  const scrollToRef = useRef<HTMLDivElement>(null);

  return (
    <Container className="flex-col gap-10">
      <div className="flex flex-col gap-6">
        <CatalogControls />
        {filtersListSlot}
        <ProductsList scrollToRef={scrollToRef} tag={tag} category={category} />
      </div>
    </Container>
  );
};

export default Catalog;
