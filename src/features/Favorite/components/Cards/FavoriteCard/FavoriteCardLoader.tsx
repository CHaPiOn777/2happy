import { ButtonLoader } from "@/shared/components/UI/Button";
import { Skeleton } from "@/shared/components/UI/Skeleton";

const FavoriteCardLoader = () => {
  return (
    <article className="flex gap-12 w-full py-8 border-b border-gray">
      <Skeleton className="w-[120px] h-[176px] shrink-0" />
      <div className="flex flex-col w-full justify-between pr-6 border-r border-gray">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-4">
            <Skeleton className="w-[120px] h-[24px] shrink-0" />
          </div>

          <div className="text-description lg:text-h5 flex flex-col items-center gap-2">
            <Skeleton className="w-[120px] h-[24px] shrink-0" />
            <Skeleton className="w-[150px] h-[24px] shrink-0" />
            <Skeleton className="w-[80px] h-[24px] shrink-0" />
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <div className="flex gap-2">
            <Skeleton className="w-[40px] h-[40px] shrink-0" />
            <Skeleton className="w-[40px] h-[40px] shrink-0" />
            <Skeleton className="w-[40px] h-[40px] shrink-0" />
          </div>
          <Skeleton className="w-[40px] h-[40px] shrink-0" />
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center h-auto">
        <ButtonLoader size="medium" />
        <ButtonLoader size="medium" />
      </div>
    </article>
  );
};

export default FavoriteCardLoader;
