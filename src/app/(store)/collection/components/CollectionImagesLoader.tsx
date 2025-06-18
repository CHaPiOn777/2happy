import { Skeleton } from "@/shared/components/UI/Skeleton";
import { cn } from "@/shared/utils";
import { ComponentPropsWithoutRef } from "react";

const CollectionImagesLoader = ({
  className,
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("flex flex-row md:flex-col gap-6 md:gap-12", className)}>
      <Skeleton className="w-full h-[550px] md:h-[960px]" />
      <Skeleton className="w-full h-[550px] md:h-[960px] hidden sm:block" />
    </div>
  );
};

export default CollectionImagesLoader;
