"use client";

import { useCatalogStore } from "@/features/Products/store/catalogStore";
import { useFiltersStore } from "@/features/Products/store/filtersStore";
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
    <div className="w-full flex flex-col gap-16">
      <div className="flex items-end gap-2">
        <h2 className="text-h2">{searchParams.get("name") ?? defaultName} /</h2>
        <span className="text-body2 mb-1 text-gray-middle">
          {totalItems} товаров
        </span>
      </div>
    </div>
  );
};

export default CatalogHeader;
