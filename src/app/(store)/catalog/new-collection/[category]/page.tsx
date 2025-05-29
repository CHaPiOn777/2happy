import { Suspense } from "react";
import { getQueryClient } from "@/shared/api/queryClient";

import Catalog from "@/app/(store)/components/MainCatalog/Catalog";
import CategorySliderLoader from "@/features/Categories/components/CategorySlider/CategorySliderLoader";
import FiltersList from "@/features/Products/components/Filters/FiltersList";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import CategoriesWithTag from "@/app/(store)/components/MainCatalog/CategoriesWithTag";
import { tagIds } from "@/features/Categories/consts/consts";

const NewCollectionCategoryPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ subTo: string | undefined }>;
}) => {
  const queryClient = getQueryClient();

  const { category } = await params;
  const { subTo } = await searchParams;
  const [slug, id] = category.split("_");

  const parentId = subTo ? subTo : id;

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col gap-12">
        <Suspense fallback={<CategorySliderLoader itemsCount={5} />}>
          <CategoriesWithTag
            tag={tagIds["new"]}
            parent={+parentId}
            activeSlug={slug}
            pathname="new_collection"
          />
        </Suspense>
        <Catalog
          category={+id}
          tag={tagIds["new"]}
          filtersListSlot={<FiltersList />}
        />
      </div>
    </HydrationBoundary>
  );
};

export default NewCollectionCategoryPage;
