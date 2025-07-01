import { getQueryClient } from "@/shared/api/queryClient";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Result from "./components/Result/Result";
import { notFound } from "next/navigation";

export const revalidate = 360;

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) => {
  const { search } = await searchParams;

  if (!search) notFound();

  const queryClient = getQueryClient();

  queryClient.prefetchQuery(
    getProductsQueryOptions({
      per_page: 4,
      type: "grouped",
      order: "desc",
      orderby: "popularity",
    })
  );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Result search={search} />
    </HydrationBoundary>
  );
};

export default SearchPage;
