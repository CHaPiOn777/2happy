import { Skeleton } from "@/shared/components/UI/Skeleton";
import { cn } from "@/shared/utils";
import { ComponentPropsWithoutRef } from "react";

const CollectionImagesLoader = ({
  className,
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <Skeleton className="w-full h-[960px]" />
      <Skeleton className="w-full h-[960px]" />
    </div>
  );
};

export default CollectionImagesLoader;
