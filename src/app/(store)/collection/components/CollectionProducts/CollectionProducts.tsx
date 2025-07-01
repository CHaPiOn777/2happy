"use client";

import { getProductByIdQueryOptions } from "@/features/Products/api/productsApi";
import { useGetProductId } from "@/features/Products/hooks/useGetProductId";
import { cn } from "@/shared/utils";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ComponentPropsWithoutRef } from "react";
import CollectionProduct from "../CollectionProduct";

const CollectionProducts = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const { id } = useGetProductId("collectionId");

  const { data } = useSuspenseQuery(getProductByIdQueryOptions(id));

  return (
    <div
      className={cn(
        "flex flex-col gap-8 sm:gap-10 md:gap-12 w-full",
        className
      )}
      {...props}
    >
      {data.grouped_products.map((id) => (
        <CollectionProduct key={id} id={id} />
      ))}
    </div>
  );
};

export default CollectionProducts;
