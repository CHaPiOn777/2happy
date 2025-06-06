"use client";

import { paths } from "@/config/paths";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { CategorySlider } from "@/features/Categories/components/CategorySlider/CategorySlider";
import { Category } from "@/features/Categories/types";
import Container from "@/shared/components/UI/Container";
import { useScrollDirection } from "@/shared/hooks/useScrollDirection";
import { cn } from "@/shared/utils";
import { useSuspenseQuery } from "@tanstack/react-query";

const CollectionsCategories = ({
  parent,
  activeSlug,
}: {
  parent: number;
  activeSlug?: string;
}) => {
  const show = useScrollDirection({ delayScroll: 600 });

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
      <div
        className={cn(
          "sticky top-[80px] z-behind-header w-full bg-white transition-all duration-500",
          show ? "translate-y-0" : "-translate-y-[150px]"
        )}
      >
        <Container className="py-3">
          <div className="w-full">
            <CategorySlider
              categories={data?.items}
              activeSlug={activeSlug}
              getHref={getHref}
            />
          </div>
        </Container>
      </div>
    );

  return null;
};

export default CollectionsCategories;
