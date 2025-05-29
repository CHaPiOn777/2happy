"use client";

import { paths } from "@/config/paths";
import { getCategoriesWithTagQueryOptions } from "@/features/Categories/api/categoriesApi";
import { CategorySlider } from "@/features/Categories/components/CategorySlider/CategorySlider";
import { Category } from "@/features/Categories/types";
import { useSuspenseQuery } from "@tanstack/react-query";

const CategoriesWithTag = ({
  tag,
  parent,
  activeSlug,
  pathname,
}: {
  tag: number;
  parent: number;
  pathname: keyof typeof paths.catalog;
  activeSlug?: string;
}) => {
  const { data } = useSuspenseQuery(
    getCategoriesWithTagQueryOptions({ tag, parent_cat: parent })
  );

  const getHref = (category: Category) => {
    // Убрать приведение типов
    const section = paths.catalog[pathname] as {
      category: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getHref: (...params: any) => string;
      };
    };
    if (category.parent)
      return section.category.getHref(
        category.id,
        category.slug,
        category.name,
        category.parent
      );

    return section.category.getHref(category.id, category.slug, category.name);
  };

  if (data.length)
    return (
      <CategorySlider
        categories={data}
        activeSlug={activeSlug}
        getHref={getHref}
      />
    );

  return null;
};

export default CategoriesWithTag;
