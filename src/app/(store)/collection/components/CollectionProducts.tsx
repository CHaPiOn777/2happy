"use client";

import { getProductByIdQueryOptions } from "@/features/Products/api/productsApi";
import { useGetProductId } from "@/features/Products/hooks/useGetProductId";
import { cn } from "@/shared/utils";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ComponentPropsWithoutRef, Suspense } from "react";
import ProductInfo from "../../product/components/ProductSection/ProductInfo/ProductInfo";
import ProductInfoLoader from "../../product/components/ProductSection/ProductInfo/ProductInfoLoader";
import ProductSectionButtons from "../../product/components/ProductSection/ProductSectionButtons";
import { Separator } from "@/shared/components/UI/Separator";
import Link from "next/link";
import { paths } from "@/config/paths";

const CollectionProducts = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const { id } = useGetProductId("collectionId");

  const { data } = useSuspenseQuery(getProductByIdQueryOptions(id));

  return (
    <div className={cn("flex flex-col gap-12 w-full", className)} {...props}>
      {data.grouped_products.map((id) => (
        <Suspense
          key={id}
          fallback={
            <ProductInfoLoader className="gap-12 justify-normal h-min" />
          }
        >
          <ProductInfo
            id={id}
            className="gap-12 justify-normal h-min"
            renderName={(product) => (
              <Link href={paths.product.getHref(product.id, product.name)}>
                <h4 className="text-h4">{product.name}</h4>
              </Link>
            )}
            renderButtons={(product, variation, disabled) => (
              <div>
                <ProductSectionButtons
                  product={product}
                  variation={variation}
                  disabled={disabled}
                />
                <Separator className="mt-16" />
              </div>
            )}
          />
        </Suspense>
      ))}
    </div>
  );
};

export default CollectionProducts;
