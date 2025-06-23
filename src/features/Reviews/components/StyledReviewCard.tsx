import QuoteIcon from "@/shared/components/icons/QuoteIcon";
import { cn, sanitizeHtml } from "@/shared/utils";
import { ComponentPropsWithoutRef } from "react";
import { WPComment } from "../types";
import { format } from "date-fns";
import Link from "next/link";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { paths } from "@/config/paths";

const StyledReviewCard = ({
  review,
  className,
  ...props
}: { review: WPComment } & ComponentPropsWithoutRef<"article">) => {
  const { safeHTML, parse } = sanitizeHtml(review.content.rendered);

  const date = new Date(review.date);
  const formatted = format(date, "dd/MM/yy");

  return (
    <Link
      className={cn("flex w-full group cursor-pointer", className)}
      href={paths.about.reviews.getHref()}
    >
      <article
        className={cn(
          "relative flex flex-col justify-between w-full cursor-pointer group-hover:bg-gray-light transition-colors p-6 border border-main rounded-xs",
          className
        )}
        {...props}
      >
        <QuoteIcon />
        <div className="text-gray-dark line-clamp-4">
          {safeHTML && parse(safeHTML)}
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <div>{review.author_name}</div>
            {!review.meta.city && !review.meta.country ? (
              <div className=" text-gray-middle">Город не указан</div>
            ) : (
              <div className=" text-gray-middle">
                {review.meta.country}, {review.meta.city}
              </div>
            )}
          </div>
          <span className="text-gray-middle">{formatted}</span>
        </div>
        <div className="flex justify-center items-center absolute top-0 right-0 bg-white w-14 h-14 group-hover:bg-gray-light transition-colors">
          <ArrowUpRightIcon />
        </div>
      </article>
    </Link>
  );
};

export default StyledReviewCard;
