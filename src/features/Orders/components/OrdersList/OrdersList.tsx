import { Accordion } from "@/shared/components/UI/Accordion";
import OrderCard, { OrderCardLoader } from "../OrderCard/OrderCard";
import OrdersNotFound from "./OrdersNotFound";
import OrdersListSelect from "./OrdersListSelect";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getOrdersInfiniteQueryOptions } from "../../api/ordersApi";
import { useEffect, useMemo, useRef, useState } from "react";
import { useUser } from "@/shared/api/authApi";
import { useIntersection } from "@/shared/hooks/useObserver";

const OrdersList = () => {
  const { data: user } = useUser();

  const [sort, setSort] = useState<string>("desc:date");
  const [order, orderby] = useMemo(() => sort.split(":"), [sort]);

  const {
    data: orders,
    isPending,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    ...getOrdersInfiniteQueryOptions({
      orderby,
      order,
      customer: user?.id,
      per_page: 10,
    }),
    select: (result) => ({
      totalPages: result.pages[0].totalPages,
      items: result.pages.map((item) => item.items).flat(),
      totalItems: result.pages[0].totalItems,
    }),
  });

  const isFetchingRef = useRef<boolean>(false);

  const callbackRef = useIntersection(() => {
    if (!isFetchingRef.current) fetchNextPage();
  });

  useEffect(() => {
    isFetchingRef.current = isFetchingNextPage;
  }, [isFetchingNextPage]);

  const noResults = !isPending && !orders?.items.length;

  if (noResults) return <OrdersNotFound />;

  if (isPending && !isFetchingNextPage) {
    return (
      <div className="space-y-4">
        <OrderCardLoader />
        <OrderCardLoader />
      </div>
    );
  }
  return (
    <Accordion type="multiple">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <OrdersListSelect
              value={sort}
              onSelect={(value) => setSort(value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            {orders?.items.map((item) => (
              <OrderCard key={item.id} order={item} />
            ))}
            {isFetchingNextPage && (
              <h2 className="text-h2Akira w-full text-center animate-pulse mb-4 mt-10">
                2HAPPY
              </h2>
            )}
          </div>
        </div>
        <div>
          <div ref={callbackRef} className="w-full h-[1px]" />
        </div>
      </div>
    </Accordion>
  );
};

export default OrdersList;
