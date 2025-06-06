import { paths } from "@/config/paths";
import Link, { LinkProps } from "next/link";
import { ComponentProps, ReactNode } from "react";
import { categoryIds, categorySlugs, TCategories } from "../consts/consts";

interface ICategoryLinkProps
  extends Omit<LinkProps, "href">,
    Omit<ComponentProps<"a">, "href"> {
  children: ReactNode;
  name: string;
  category: TCategories;
  parent?: TCategories;
  parentId?: number;
}

const CategoryLink = ({
  children,
  name,
  category,
  parent,
  parentId,
  ...props
}: ICategoryLinkProps) => {
  const parentIdCalculated = parent && categoryIds[parent];
  const link = paths.catalog.category.getHref(
    categoryIds[category],
    categorySlugs[category],
    name,
    parentId ?? parentIdCalculated
  );

  return (
    <Link {...props} href={link}>
      {children}
    </Link>
  );
};

export default CategoryLink;
