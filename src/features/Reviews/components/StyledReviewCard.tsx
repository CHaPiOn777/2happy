import QuoteIcon from "@/shared/components/icons/QuoteIcon";
import { cn } from "@/shared/utils";
import { ComponentPropsWithoutRef } from "react";

const StyledReviewCard = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"article">) => {
  return (
    <article
      className={cn(
        "flex flex-col justify-between w-full p-6 border border-main rounded-xs",
        className
      )}
      {...props}
    >
      <QuoteIcon />
      <p className="text-gray-dark">
        Обожаю стиль 2HAPPY! Ношу уже третью капсулу — всё сочетается, удобно
        и выглядит дорого. Особенно понравилось качество трикотажа…
      </p>
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <div>Инесса Г.</div>
          <div className="text-gray-middle">Казахстан, Петропавловск</div>
        </div>
        <span className="text-gray-middle">26/03/25</span>
      </div>
    </article>
  );
};

export default StyledReviewCard;
