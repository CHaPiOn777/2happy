"use client";

import { paths } from "@/config/paths";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { CategorySlider } from "@/features/Categories/components/CategorySlider/CategorySlider";
import { Category } from "@/features/Categories/types";
import { useSuspenseQuery } from "@tanstack/react-query";

const CollectionsCategories = ({
  parent,
  activeSlug,
}: {
  parent: number;
  activeSlug?: string;
}) => {
  const { data } = useSuspenseQuery(getCategoriesQueryOptions({ parent }));

  const getHref = (category: Category) => {
    return paths.catalog.collections.category.getHref(
      category.id,
      category.slug,
      category.name,
      category.parent
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

export default CollectionsCategories;
