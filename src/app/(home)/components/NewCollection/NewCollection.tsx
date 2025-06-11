import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import NewCollectionSlider from "./components/NewCollectionSlider/NewCollectionSlider";
import { Suspense } from "react";
import { getQueryClient } from "@/shared/api/queryClient";
import { tagIds } from "@/features/Categories/consts/consts";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import NewCollectionLoader from "./components/NewCollectionSlider/NewCollectionLoader";

import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

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
          <AnimatedInView
            as="h2"
            fallbackClassName="opacity-0"
            viewport={{ once: true, amount: "all" }}
            animations={{
              xl: {
                transition: { duration: 0.6, type: "tween" },
                initial: { opacity: 0, translateX: 100 },
                whileInView: { opacity: 1, translateX: 0 },
              },
              default: {
                transition: { duration: 0.6, type: "tween" },
                initial: { opacity: 0, translateX: 200 },
                whileInView: { opacity: 1, translateX: 0 },
              },
            }}
            className="text-h2 w-min whitespace-nowrap"
          >
            Новая коллекция / 25
          </AnimatedInView>
          <Suspense fallback={<NewCollectionLoader />}>
            <NewCollectionSlider />
          </Suspense>
        </Container>
      </Section>
    </HydrationBoundary>
  );
};

export default NewCollection;
