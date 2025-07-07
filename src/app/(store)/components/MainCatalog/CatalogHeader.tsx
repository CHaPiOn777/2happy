"use client";

import { useCatalogStore } from "@/features/Products/store/catalogStore";
import { useFiltersStore } from "@/features/Products/store/filtersStore";
import Container from "@/shared/components/UI/Container";
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect } from "react";

import { motion } from "motion/react";

const CatalogHeader = ({ defaultName }: { defaultName?: ReactNode }) => {
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
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col md:flex-row md:items-end gap-2"
      >
        <h2 className="text-h2">{searchParams.get("name") ?? defaultName} /</h2>
        <span className="text-body2 mb-1 text-gray-middle">
          {totalItems} товаров
        </span>
      </motion.div>
    </Container>
  );
};

export default CatalogHeader;
