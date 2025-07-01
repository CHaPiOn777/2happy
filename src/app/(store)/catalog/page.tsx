import Catalog from "../components/MainCatalog/Catalog";
import FiltersList from "@/features/Products/components/Filters/FiltersList";
import MainCategories from "../components/MainCatalog/MainCategories/MainCategories";
import { getQueryClient } from "@/shared/api/queryClient";
import {
  attributesMap,
  getProductAttributesQueryOptions,
} from "@/features/Products/api/filtersApi";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const CatalogPage = () => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(
    getProductAttributesQueryOptions(attributesMap["colors"])
  );

  queryClient.prefetchQuery(
    getProductAttributesQueryOptions(attributesMap["sizes"])
  );
  return (
    <div className="flex flex-col gap-12">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MainCategories />
        <Catalog filtersListSlot={<FiltersList />} />
      </HydrationBoundary>
    </div>
  );
};

export default CatalogPage;
