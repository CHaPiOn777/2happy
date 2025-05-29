"use client";

import { paths } from "@/config/paths";
import ChevronDownIcon from "@/shared/components/icons/Chevron/ChevronDownIcon";
import { SheetTrigger, TSheetTrigger } from "@/shared/components/UI/Sheet";
import { cn } from "@/shared/utils/cn";
import { usePathname } from "next/navigation";

const EXCLUDE_PATHS = [
  paths.catalog.bestsellers.getHref(),
  paths.catalog.final_sale.getHref(),
  paths.catalog.new_collection.getHref(),
  paths.catalog.collections.getHref(),
];

const CategorySheetTrigger = ({
  isHovered,
  className,
  ...props
}: { isHovered: boolean } & TSheetTrigger) => {
  const pathname = usePathname();

  const isActive =
    pathname.includes(paths.catalog.getHref()) &&
    !EXCLUDE_PATHS.some((item) => pathname.includes(item.split("?")[0]));

  return (
    <SheetTrigger
      className={cn(
        `text-button-normal link-hover outline-none`,
        isHovered && "link-hovered",
        isActive && "link-active",
        className
      )}
      {...props}
    >
      Каталог
      <ChevronDownIcon
        className={`group-hover/link:rotate-180 ${
          isHovered && "fill-gray rotate-180"
        } transition-[stroke,transform]`}
      />
    </SheetTrigger>
  );
};

export default CategorySheetTrigger;
