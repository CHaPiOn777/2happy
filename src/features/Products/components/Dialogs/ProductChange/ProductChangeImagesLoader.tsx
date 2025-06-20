import { Skeleton } from "@/shared/components/UI/Skeleton";
import { cn } from "@/shared/utils";
import { ComponentPropsWithoutRef } from "react";

const ProductChangeImagesLoader = ({
  className,
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("flex gap-6 w-full md:gap-12", className)}>
      <Skeleton className="w-full h-[552px]" />
      <Skeleton className="w-full h-[552px] hidden sm:block md:hidden" />
    </div>
  );
};

export default ProductChangeImagesLoader;
