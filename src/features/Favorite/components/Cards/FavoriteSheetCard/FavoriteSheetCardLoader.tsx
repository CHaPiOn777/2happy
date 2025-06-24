import { IconButtonLoader } from "@/shared/components/UI/IconButton";
import { Skeleton } from "@/shared/components/UI/Skeleton";

const FavoriteSheetCardLoader = () => {
  return (
    <div className="w-full flex gap-6 h-[248px] shrink-0 pb-8 border-b border-gray last:border-b-0">
      <Skeleton className="w-[148px] shrink-0" />
      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <Skeleton className="w-3/4 h-[24px]" />
          <Skeleton className="w-[190px] h-[20px] mb-2" />
          <Skeleton className="w-[130px] h-[18px]" />
          <Skeleton className="w-[130px] h-[18px]" />
        </div>
        <div className="flex gap-2">
          <IconButtonLoader size="extraSmall" />
          <Skeleton className="w-[68px] h-[32px]" />
          <IconButtonLoader size="extraSmall" />
        </div>
      </div>
    </div>
  );
};

export default FavoriteSheetCardLoader;
