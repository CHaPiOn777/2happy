"use client";

import { getProductByIdQueryOptions } from "@/features/Products/api/productsApi";
import { useGetProductId } from "@/features/Products/hooks/useGetProductId";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { cn } from "@/shared/utils";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ComponentPropsWithoutRef } from "react";

const CollectionImages = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const { id } = useGetProductId("collectionId");

  const { data } = useSuspenseQuery(getProductByIdQueryOptions(id));

  const images = data.images.slice(0, 2);

  return (
    <div className={cn("flex flex-col gap-12", className)} {...props}>
      {images.map((image) => (
        <ImageWithLoader
          wrapperClassName="w-[600px] h-[936px]"
          key={image.id}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default CollectionImages;
