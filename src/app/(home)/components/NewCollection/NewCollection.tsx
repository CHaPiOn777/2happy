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
import { Button } from "@/shared/components/UI/Button";
import Link from "next/link";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { paths } from "@/config/paths";
import NewCollectionList from "./components/NewCollectionList";

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
        <Container className="flex-col gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-section mt-24 sm:mt-section">
          <AnimatedInView
            as="h2"
            fallbackClassName="opacity-0"
            viewport={{ once: true, amount: "all" }}
            animations={{
              md: {
                transition: { duration: 0.6, type: "tween" },
                initial: { opacity: 0, x: 80 },
                whileInView: { opacity: 1, x: 0 },
              },
              xl: {
                transition: { duration: 0.6, type: "tween" },
                initial: { opacity: 0, x: 100 },
                whileInView: { opacity: 1, x: 0 },
              },
              default: {
                transition: { duration: 0.6, type: "tween" },
                initial: { opacity: 0, y: -80 },
                whileInView: { opacity: 1, y: 0 },
              },
            }}
            className="text-h2 w-min whitespace-nowrap"
          >
            Новая коллекция / 25
          </AnimatedInView>
          <AnimatedInView
            as="div"
            viewport={{ once: true, amount: 0.4 }}
            fallbackClassName="opacity-0"
            animations={{
              default: {
                transition: { duration: 0.7, type: "tween" },
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
              },
            }}
            className="overflow-hidden pb-4 hidden md:block"
          >
            <Suspense fallback={<NewCollectionLoader />}>
              <NewCollectionSlider />
            </Suspense>
          </AnimatedInView>

          <AnimatedInView
            as="div"
            viewport={{ once: true, amount: 0.4 }}
            fallbackClassName="opacity-0"
            animations={{
              default: {
                transition: { duration: 0.7, type: "tween" },
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
              },
            }}
            className="overflow-hidden block md:hidden"
          >
            <Suspense fallback={<NewCollectionLoader />}>
              <NewCollectionList />
            </Suspense>
          </AnimatedInView>

          <AnimatedInView
            as="div"
            viewport={{ once: true, amount: 0.4 }}
            animations={{
              default: {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, type: "tween" },
              },
            }}
            className="block sm:hidden"
          >
            <Button
              className="w-full"
              variant={"secondary"}
              size={"medium"}
              asChild
            >
              <Link href={paths.catalog.new_collection.getHref()}>
                Все новинки <ArrowUpRightIcon />
              </Link>
            </Button>
          </AnimatedInView>
        </Container>
      </Section>
    </HydrationBoundary>
  );
};

export default NewCollection;
