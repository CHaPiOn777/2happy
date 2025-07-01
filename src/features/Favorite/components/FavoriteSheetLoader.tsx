import { Skeleton } from "@/shared/components/UI/Skeleton";
import { ButtonLoader } from "@/shared/components/UI/Button";
import FavoriteSheetCardLoader from "./Cards/FavoriteSheetCard/FavoriteSheetCardLoader";

const FavoriteSheetLoader = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-8">
        <FavoriteSheetCardLoader />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Skeleton className="w-[130px] h-[16px]" />
            <div className="flex justify-between">
              <Skeleton className="w-[130px] h-[16px]" />
              <Skeleton className="w-[90px] h-[16px]" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="w-[130px] h-[16px]" />
              <Skeleton className="w-[90px] h-[16px]" />
            </div>
          </div>
          <div className="flex justify-between">
            <Skeleton className="w-[180px] h-[28px]" />
            <Skeleton className="w-[100px] h-[28px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <ButtonLoader size="large" className="w-full" />
        <ButtonLoader size="large" className="w-full" />
      </div>
    </div>
  );
};

export default FavoriteSheetLoader;
