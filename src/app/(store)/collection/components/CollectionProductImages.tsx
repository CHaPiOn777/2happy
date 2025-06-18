import { getProductByIdQueryOptions } from "@/features/Products/api/productsApi";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Image } from "@/shared/types/api";
import { cn } from "@/shared/utils";
import { useSuspenseQuery } from "@tanstack/react-query";

const CollectionProductImages = ({
  productId,
  images,
  className,
}: {
  productId: number;
  images: Image[];
  className?: string;
}) => {
  const { data } = useSuspenseQuery(getProductByIdQueryOptions(productId));
  const visibleImages = images.slice(0, 2);
  return (
    <div
      className={cn("flex gap-6 h-[550px] justify-center md:hidden", className)}
    >
      {visibleImages.map((image, index) => {
        const isLast = index === visibleImages.length - 1;
        const shouldHide = isLast && visibleImages.length > 1;

        return (
          <ImageWithLoader
            wrapperClassName={cn(
              "w-full max-w-[450px]",
              shouldHide && "last:hidden sm:last:block"
            )}
            key={image.id}
            src={image.src}
            alt={image.alt}
          />
        );
      })}
    </div>
  );
};

export default CollectionProductImages;
