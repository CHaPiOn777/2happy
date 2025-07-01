"use client";

import Link from "next/link";
import { ProductServer } from "../../types";
import { MouseEvent } from "react";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { paths } from "@/config/paths";
import { getProductCardInfo } from "../../utils/getProductCardInfo";

import { Skeleton } from "@/shared/components/UI/Skeleton";
import { cn } from "@/shared/utils/cn";
import { getQueryClient } from "@/shared/api/queryClient";
import { getProductByIdQueryOptions } from "../../api/productsApi";

const CollectionCard = ({ product }: { product: ProductServer }) => {
  const queryClient = getQueryClient();

  const { image } = getProductCardInfo(product);

  const handleFavoriteClick = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
  };

  const handleLinkClick = () => {
    queryClient.setQueryData(
      getProductByIdQueryOptions(product.id).queryKey,
      product
    );
  };

  return (
    <article className="group/product w-full h-full">
      <Link
        onClick={handleLinkClick}
        href={paths.collection.getHref(product.id, product.name)}
        className="flex flex-col h-full gap-4"
      >
        <div className="relative h-full">
          {/* <HeartIcon
            role="button"
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 z-50 opacity-0 group-hover/product:opacity-100 hover:fill-main"
          /> */}
          {image && (
            <ImageWithLoader
              src={image.src}
              className="group-hover/product:opacity-60 transition-opacity"
              alt={image.alt ?? "product-image"}
            />
          )}
        </div>
      </Link>
    </article>
  );
};

export default CollectionCard;

export const CollectionCardLoader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col gap-4 w-full h-full", className)}>
      <Skeleton className="w-full h-full" />
    </div>
  );
};
