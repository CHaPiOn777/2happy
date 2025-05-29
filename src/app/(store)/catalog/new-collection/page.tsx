import FiltersList from "@/features/Products/components/Filters/FiltersList";
import Catalog from "../../components/MainCatalog/Catalog";
import { tagIds } from "@/features/Categories/consts/consts";
import { Suspense } from "react";
import CategorySliderLoader from "@/features/Categories/components/CategorySlider/CategorySliderLoader";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import CategoriesWithTag from "../../components/MainCatalog/CategoriesWithTag";
import { getQueryClient } from "@/shared/api/queryClient";
import { getCategoriesWithTagQueryOptions } from "@/features/Categories/api/categoriesApi";

const NewCollectionPage = () => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(
    getCategoriesWithTagQueryOptions({ tag: tagIds["new"], parent_cat: 0 })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col gap-12">
        <Suspense fallback={<CategorySliderLoader itemsCount={3} />}>
          <CategoriesWithTag
            pathname="new_collection"
            tag={tagIds["new"]}
            parent={0}
          />
        </Suspense>
        <Catalog tag={tagIds["new"]} filtersListSlot={<FiltersList />} />
      </div>
    </HydrationBoundary>
  );
};

export default NewCollectionPage;
