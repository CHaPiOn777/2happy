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
}

const CategoryLink = ({
  children,
  name,
  category,
  parent,
  ...props
}: ICategoryLinkProps) => {
  const parentId = parent && categoryIds[parent];
  const link = paths.catalog.collections.category.getHref(
    categoryIds[category],
    categorySlugs[category],
    name,
    parentId
  );

  return (
    <Link {...props} href={link}>
      {children}
    </Link>
  );
};

export default CategoryLink;
