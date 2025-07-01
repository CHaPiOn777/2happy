import { Image } from "@/shared/types/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getProductByIdQueryOptions } from "../../../api/productsApi";
import { cn } from "@/shared/utils";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";

const ProductChangeImages = ({
  productId,
  images,
  className,
}: {
  productId: number;
  images: Image[];
  className?: string;
}) => {
  const {} = useSuspenseQuery(getProductByIdQueryOptions(productId));
  const visibleImages = images.slice(0, 2);
  return (
    <div className={cn("flex gap-6 w-full justify-center", className)}>
      {visibleImages.map((image, index) => {
        const isLast = index === visibleImages.length - 1;
        const shouldHide = isLast && visibleImages.length > 1;

        return (
          <ImageWithLoader
            wrapperClassName={cn(
              "w-full max-w-[450px] h-[560px] md:h-[456px] lg:h-[550px] lg:max-w-full",
              shouldHide && "last:hidden sm:last:block md:last:hidden"
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

export default ProductChangeImages;
