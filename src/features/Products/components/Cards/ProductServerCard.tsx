"use client";

import HeartIcon from "@/shared/components/icons/HeartIcon";
import Link from "next/link";
import { ProductServer } from "../../types";
import { Chip } from "@/shared/components/UI/Chip";
import { ComponentPropsWithoutRef, MouseEvent } from "react";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import ColorSquare from "../Colors/ColorSquare";
import { paths } from "@/config/paths";
import { getProductCardInfo } from "../../utils/getProductCardInfo";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { useQueryClient } from "@tanstack/react-query";
import { getProductByIdQueryOptions } from "../../api/productsApi";

import { Skeleton } from "@/shared/components/UI/Skeleton";
import { cn } from "@/shared/utils/cn";
import { Separator } from "@/shared/components/UI/Separator";

const ProductServerCard = ({
  product,
  className,
  showAttributes = true,
  ...props
}: {
  product: ProductServer;
  showAttributes?: boolean;
} & ComponentPropsWithoutRef<"article">) => {
  const queryClient = useQueryClient();
  const [_, setRecentProducts] = useLocalStorage<number[]>(
    "recentProducts",
    []
  );
  const { colors, image, sizes, chip } = getProductCardInfo(product);

  const handleLinkClick = () => {
    queryClient.setQueryData(
      getProductByIdQueryOptions(product.id).queryKey,
      product
    );
    setRecentProducts((oldData) => [
      product.id,
      ...oldData.filter((item) => item != product.id).slice(0, 10),
    ]);
  };

  const handleFavoriteClick = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
  };

  return (
    <article
      className={cn("group/product w-full h-full", className)}
      {...props}
    >
      <Link
        onClick={handleLinkClick}
        href={paths.product.getHref(product.id, product.name)}
        className="flex flex-col h-full gap-4"
      >
        <div className="relative h-full">
          {chip && (
            <Chip
              className="absolute top-4 left-4 z-10"
              variant={chip.type}
              size="small"
            >
              {chip.text}
            </Chip>
          )}
          <HeartIcon
            role="button"
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 z-50 opacity-0 group-hover/product:opacity-100 hover:fill-main"
          />
          {image && (
            <ImageWithLoader
              src={image.src}
              className="group-hover/product:opacity-60 transition-opacity"
              alt={image.alt ?? "product-image"}
            />
          )}
        </div>
        <div>
          <h5 className="text-h5 mb-2 h-[48px] line-clamp-2">{product.name}</h5>
          <div className="flex justify-between w-full lg:hidden">
            {showAttributes && (
              <div className="w-full flex items-center gap-2">
                <div className="flex gap-2">
                  {colors.map((color: string) => (
                    <ColorSquare key={color} color={color} />
                  ))}
                </div>
                <Separator
                  className="h-4 bg-gray-light"
                  orientation="vertical"
                />
                <div className="flex gap-2 text-gray-middle">
                  {sizes.map((size: string) => (
                    <span
                      key={size}
                      className="text-description whitespace-nowrap"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div
              className={cn(
                "flex w-full gap-2",
                showAttributes && "justify-end"
              )}
            >
              {product.on_sale ? (
                <>
                  <span className={"text-gray-middle line-through"}>
                    {product.regular_price} &#8376;
                  </span>
                  <span className="text-red">{product.sale_price} &#8376;</span>
                </>
              ) : (
                <span className="text-gray-dark">{product.price} &#8376;</span>
              )}
            </div>
          </div>
          <div className="w-full relative h-6 hidden lg:block">
            {showAttributes && (
              <div className="absolute w-full flex items-center justify-between gap-2 opacity-0 group-hover/product:opacity-100 transition-opacity">
                <div className="flex gap-2">
                  {colors.map((color: string) => (
                    <ColorSquare key={color} color={color} />
                  ))}
                </div>
                <div className="flex gap-2 text-gray-middle">
                  {sizes.map((size: string) => (
                    <span key={size} className="text-body2">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div
              className={`absolute flex w-full gap-2 opacity-100 transition-opacity ${
                showAttributes && "group-hover/product:opacity-0"
              }`}
            >
              {product.on_sale ? (
                <>
                  <span className={"text-gray-middle line-through"}>
                    {product.regular_price} &#8376;
                  </span>
                  <span className="text-red">{product.sale_price} &#8376;</span>
                </>
              ) : (
                <span>{product.price} &#8376;</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductServerCard;

export const ProductCardLoader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col gap-4 w-full h-full", className)}>
      <Skeleton className="w-full h-full" />
      <Skeleton className="w-3/5 h-[18px]" />
      <Skeleton className="w-2/5 h-[18px]" />
    </div>
  );
};
