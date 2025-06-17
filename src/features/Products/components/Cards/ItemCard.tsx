import Link, { LinkProps } from "next/link";
import { cn } from "@/shared/utils/cn";

import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";

// Нужно переименовать
const ItemCard = ({
  src,
  href,
  className,
  imageClassName,
  ...props
}: {
  src: string;
  className?: string;
  imageClassName?: string;
} & LinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block w-full h-full rounded-xs overflow-hidden shadow-elevation-1 hover:shadow-elevation-3 transition-shadow",
        className
      )}
      {...props}
    >
      <ArrowUpRightIcon className="absolute top-4 right-4 z-[1] opacity-0 group-hover:opacity-100 transition-opacity" />
      <ImageWithLoader
        className={cn(
          "group-hover:opacity-60 transition-opacity object",
          imageClassName
        )}
        src={src}
        alt="item-img"
      />
    </Link>
  );
};

export default ItemCard;
