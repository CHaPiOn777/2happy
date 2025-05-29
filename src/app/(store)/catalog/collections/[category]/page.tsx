import { Suspense } from "react";
import { getQueryClient } from "@/shared/api/queryClient";

import Catalog from "@/app/(store)/components/MainCatalog/Catalog";
import CategorySliderLoader from "@/features/Categories/components/CategorySlider/CategorySliderLoader";
import CatalogCategories from "@/app/(store)/components/MainCatalog/CatalogCategories";
import FiltersList from "@/features/Products/components/Filters/FiltersList";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import CollectionsCategories from "@/app/(store)/components/CollectionsCatalog.tsx/CollectionsCategories";
import { categoryIds } from "@/features/Categories/consts/consts";
import CollectionsCatalog from "@/app/(store)/components/CollectionsCatalog.tsx/CollectionsCatalog";

const CollectionsPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ subTo: string | undefined }>;
}) => {
  const queryClient = getQueryClient();

  const { category } = await params;
  const [slug, id] = category.split("_");

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col gap-12">
        <Suspense fallback={<CategorySliderLoader itemsCount={3} />}>
          <CollectionsCategories
            parent={categoryIds["collections"]}
            activeSlug={slug}
          />
        </Suspense>
        <CollectionsCatalog category={+id} />
      </div>
    </HydrationBoundary>
  );
};

export default CollectionsPage;
