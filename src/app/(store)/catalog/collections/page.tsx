import { categoryIds } from "@/features/Categories/consts/consts";
import { Suspense } from "react";
import CategorySliderLoader from "@/features/Categories/components/CategorySlider/CategorySliderLoader";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/shared/api/queryClient";
import CollectionsCategories from "../../components/CollectionsCatalog.tsx/CollectionsCategories";
import CollectionsCatalog from "../../components/CollectionsCatalog.tsx/CollectionsCatalog";

const CollectionsPage = () => {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col gap-12">
        <Suspense fallback={<CategorySliderLoader itemsCount={3} />}>
          <CollectionsCategories parent={categoryIds["collections"]} />
        </Suspense>
        <CollectionsCatalog category={categoryIds["collections"]} />
      </div>
    </HydrationBoundary>
  );
};

export default CollectionsPage;
