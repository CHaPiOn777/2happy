import { ButtonLoader } from "@/shared/components/UI/Button";
import { IconButtonLoader } from "@/shared/components/UI/IconButton";
import { Separator } from "@/shared/components/UI/Separator";
import { Skeleton } from "@/shared/components/UI/Skeleton";
import { cn } from "@/shared/utils";
import { ComponentPropsWithoutRef } from "react";

const ProductInfoLoader = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("flex flex-col gap-8 justify-between", className)}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <Skeleton className="w-2/3 h-8" />
            <Skeleton className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Skeleton className="w-24 h-8" />
            </div>

            <div className="text-gray-middle text-description">
              Включая налоги, без стоимости доставки
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <Skeleton className="w-[100px] h-4" />
          </div>
          <div className="flex gap-2">
            <IconButtonLoader className="w-12" size="small" />
            <IconButtonLoader className="w-12" size="small" />
            <IconButtonLoader className="w-12" size="small" />
            <IconButtonLoader className="w-12" size="small" />
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <Skeleton className="w-[100px] h-4" />
            <Skeleton className="w-[80px] h-4" />
          </div>
          <div className="flex gap-2">
            <IconButtonLoader className="w-12" size="small" />
            <IconButtonLoader className="w-12" size="small" />
            <IconButtonLoader className="w-12" size="small" />
            <IconButtonLoader className="w-12" size="small" />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <ButtonLoader className="w-full" />
        <ButtonLoader className="w-full" />
        <IconButtonLoader className="w-24" />
      </div>
    </div>
  );
};

export default ProductInfoLoader;
