import { Suspense } from "react";
import { getQueryClient } from "@/shared/api/queryClient";

import Catalog from "../../components/MainCatalog/Catalog";
import CategorySliderLoader from "@/features/Categories/components/CategorySlider/CategorySliderLoader";
import CatalogCategories from "../../components/MainCatalog/CatalogCategories";
import FiltersList from "@/features/Products/components/Filters/FiltersList";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const CatalogPage = async ({
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
          <CatalogCategories parent={+parentId} activeSlug={slug} />
        </Suspense>
        <Catalog category={+id} filtersListSlot={<FiltersList />} />
      </div>
    </HydrationBoundary>
  );
};

export default CatalogPage;
