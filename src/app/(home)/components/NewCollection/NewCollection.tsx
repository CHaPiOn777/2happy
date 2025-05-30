import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import NewCollectionSlider from "./components/NewCollectionSlider.tsx/NewCollectionSlider";
import { Suspense } from "react";
import { getQueryClient } from "@/shared/api/queryClient";
import { tagIds } from "@/features/Categories/consts/consts";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import NewCollectionLoader from "./components/NewCollectionSlider.tsx/NewCollectionLoader";

const NewCollection = async () => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(
    getProductsQueryOptions({
      tag: tagIds["new"],
      exclude_type: "grouped",
      per_page: 9,
    })
  );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Section>
        <Container className="flex-col gap-16 my-section">
          <h2 className="text-h2">Новая коллекция / 25</h2>
          <Suspense fallback={<NewCollectionLoader />}>
            <NewCollectionSlider />
          </Suspense>
        </Container>
      </Section>
    </HydrationBoundary>
  );
};

export default NewCollection;
