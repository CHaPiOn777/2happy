import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import FinalSaleList from "./components/FinalSaleList";
import { Suspense } from "react";
import { getQueryClient } from "@/shared/api/queryClient";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import { tagIds } from "@/features/Categories/consts/consts";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import FinalSaleListLoader from "./components/FinalSaleListLoader";
import Link from "next/link";
import { paths } from "@/config/paths";

const FinalSale = async () => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(
    getProductsQueryOptions({
      tag: tagIds["final_sale"],
      exclude_type: "grouped",
      per_page: 3,
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Section>
        <Container className="flex h-[544px] gap-6 my-section">
          <Suspense fallback={<FinalSaleListLoader />}>
            <FinalSaleList />
          </Suspense>
          <div className="w-full flex flex-col justify-between ">
            <h2 className="text-h2">
              FINAL SALE <br />/
            </h2>
            <div className="flex flex-col gap-6 mb-[96px]">
              <Link
                className="link-hover"
                href={paths.catalog.final_sale.getHref()}
              >
                Смотреть все <ArrowRightIcon />
              </Link>

              <div className="relative h-[160px]">
                <Image
                  fill
                  className="object-cover object-top"
                  src="/images/Home/FinalSale/view-all.jpg"
                  alt="final-sale-section-image"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </HydrationBoundary>
  );
};

export default FinalSale;
