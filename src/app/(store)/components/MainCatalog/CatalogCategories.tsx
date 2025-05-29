"use client";

import { paths } from "@/config/paths";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { CategorySlider } from "@/features/Categories/components/CategorySlider/CategorySlider";
import { Category } from "@/features/Categories/types";
import { useSuspenseQuery } from "@tanstack/react-query";

const CatalogCategories = ({
  parent,
  activeSlug,
}: {
  parent: number;
  activeSlug?: string;
}) => {
  const { data } = useSuspenseQuery(getCategoriesQueryOptions({ parent }));

  const getHref = (category: Category) => {
    if (category.parent)
      return paths.catalog.category.getHref(
        category.id,
        category.slug,
        category.name,
        category.parent
      );

    return paths.catalog.category.getHref(
      category.id,
      category.slug,
      category.name
    );
  };

  if (data.items.length)
    return (
      <CategorySlider
        categories={data?.items}
        activeSlug={activeSlug}
        getHref={getHref}
      />
    );

  return null;
};

export default CatalogCategories;
