"use client";

import { paths } from "@/config/paths";
import { getCategoriesWithTagQueryOptions } from "@/features/Categories/api/categoriesApi";
import { CategorySlider } from "@/features/Categories/components/CategorySlider/CategorySlider";
import { Category } from "@/features/Categories/types";
import Container from "@/shared/components/UI/Container";
import { useScrollDirection } from "@/shared/hooks/useScrollDirection";
import { cn } from "@/shared/utils";
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
  const show = useScrollDirection({ delayScroll: 600 });

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
      <div
        className={cn(
          "sticky top-[56px] sm:top-[80px] z-behind-header w-full bg-white transition-all duration-500",
          show ? "translate-y-0" : "-translate-y-[150px]"
        )}
      >
        <Container className="py-3">
          <div className="w-full">
            <CategorySlider
              categories={data}
              activeSlug={activeSlug}
              getHref={getHref}
            />
          </div>
        </Container>
      </div>
    );

  return null;
};

export default CategoriesWithTag;
