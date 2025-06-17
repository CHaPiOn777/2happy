"use client";

import { useCatalogStore } from "@/features/Products/store/catalogStore";
import { useFiltersStore } from "@/features/Products/store/filtersStore";
import Container from "@/shared/components/UI/Container";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const CatalogHeader = ({ defaultName }: { defaultName?: string }) => {
  const { clearFilters } = useFiltersStore();
  const { totalItems } = useCatalogStore();

  const searchParams = useSearchParams();

  useEffect(() => {
    return () => {
      clearFilters();
    };
  }, []);
  return (
    <Container className="flex-col">
      <div className="flex flex-col md:flex-row md:items-end gap-2">
        <h2 className="text-h2">{searchParams.get("name") ?? defaultName} /</h2>
        <span className="text-body2 mb-1 text-gray-middle">
          {totalItems} товаров
        </span>
      </div>
    </Container>
  );
};

export default CatalogHeader;
