"use client";

import { tagIds } from "@/features/Categories/consts/consts";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductServerCard from "@/features/Products/components/Cards/ProductServerCard";
import { useSuspenseQuery } from "@tanstack/react-query";

import { motion } from "motion/react";

const FinalSaleList = () => {
  const { data } = useSuspenseQuery(
    getProductsQueryOptions({
      tag: tagIds["final_sale"],
      exclude_type: "grouped",
      per_page: 3,
    })
  );

  return (
    <>
      {data.items.map((product) => (
        <motion.div
          key={product.id}
          transition={{ duration: 0.6, type: "tween" }}
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full first:hidden lg:first:block"
        >
          <ProductServerCard product={product} />
        </motion.div>
      ))}
    </>
  );
};

export default FinalSaleList;
