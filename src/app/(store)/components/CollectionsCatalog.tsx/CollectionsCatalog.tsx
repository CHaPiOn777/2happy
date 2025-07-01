"use client";

import CollectionsList from "@/features/Products/components/Lists/CollectionsList";
import CollectionsCatalogControls from "./CollectionsCatalogControls";
import { ReactNode } from "react";
import Container from "@/shared/components/UI/Container";

const CollectionsCatalog = ({
  category,
  filtersListSlot,
}: {
  category?: number;
  tag?: number;
  filtersListSlot?: ReactNode;
}) => {
  return (
    <Container className="flex-col gap-10">
      <div className="flex flex-col gap-6">
        <CollectionsCatalogControls />
        {filtersListSlot}
        <CollectionsList category={category} />
      </div>
    </Container>
  );
};

export default CollectionsCatalog;
