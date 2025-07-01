import QuoteIcon from "@/shared/components/icons/QuoteIcon";
import Image from "next/image";
import { WPComment } from "../types";
import { format } from "date-fns";
import { cn, sanitizeHtml } from "@/shared/utils";
import { Skeleton } from "@/shared/components/UI/Skeleton";

const ReviewCard = ({ review }: { review: WPComment }) => {
  const date = new Date(review.date);
  const formatted = format(date, "dd/MM/yy");

  const { safeHTML, parse } = sanitizeHtml(review.content.rendered);
  return (
    <article
      className={cn(
        "flex flex-col gap-6 py-6 border-t border-gray",
        review.meta.images.length === 0 && "pb-0"
      )}
    >
      <QuoteIcon />
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <div className="text-body1 capitalize">{review.author_name}</div>
          {!review.meta.city && !review.meta.country ? (
            <div className="text-description text-gray-middle">
              Город не указан
            </div>
          ) : (
            <div className="text-description text-gray-middle">
              {review.meta.country}, {review.meta.city}
            </div>
          )}
        </div>
        <span className="text-gray-middle">{formatted}</span>
      </div>
      <div className="space-y-4">
        <div className="text-gray-dark">{safeHTML && parse(safeHTML)}</div>
        {/* <div className=" flex gap-4">
          {review.meta.images.map((item, index) => (
            <div key={index} className="relative w-[104px] h-[156px]">
              <Image
                fill
                className="object-cover"
                src={item.src}
                alt="review-1"
              />
            </div>
          ))}
        </div> */}
      </div>
    </article>
  );
};

export default ReviewCard;

export const ReviewCardLoader = () => {
  return (
    <article className={"flex flex-col gap-6 py-6 border-t border-gray"}>
      <QuoteIcon />
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <Skeleton className="w-[180px] h-[18px]" />
          <Skeleton className="w-[120px] h-[14px]" />
        </div>
        <Skeleton className="w-[100px] h-[14px]" />
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="w-full h-[14px]" />
          <Skeleton className="w-full h-[14px]" />
          <Skeleton className="w-full h-[14px]" />
        </div>
        <div className=" flex gap-4">
          <Skeleton className="w-[104px] h-[156px]" />
          <Skeleton className="w-[104px] h-[156px]" />
          <Skeleton className="w-[104px] h-[156px]" />
        </div>
      </div>
    </article>
  );
};
