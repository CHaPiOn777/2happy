import { env } from "@/config/env";
import { formattedApiInstance } from "@/shared/api/formattedApiInstance";
import { WooResponse } from "@/shared/types/api";
import { createURLWithParams } from "@/shared/utils";
import {
  CreateOrderPayload,
  OrderResponse,
  RefundOrderPayload,
} from "../types";
import {
  InfiniteData,
  infiniteQueryOptions,
  QueryOptions,
  queryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import { getQueryClient } from "@/shared/api/queryClient";

export type getOrdersListParameters = {
  page?: number;
  per_page?: number;
  order?: string;
  orderby?: string;
  customer?: number;
};

const ordersListURL = `${env.WOOCOMMERCE_API}/orders`;

export const getOrdersList = async (
  params: getOrdersListParameters,
  { signal }: { signal: AbortSignal }
): Promise<WooResponse<OrderResponse[]>> => {
  const getProductsListURLWithParams = createURLWithParams(
    ordersListURL,
    params
  );

  const response = await formattedApiInstance.get<
    unknown,
    WooResponse<OrderResponse[]>
  >(getProductsListURLWithParams, {
    signal,
  });

  return response;
};

const ordersQueryKey = (params: getOrdersListParameters) => {
  const queryKey = ["orders"];

  Object.entries(params).forEach(([key, value]) => {
    if (value) queryKey.push(`${key} ${value}`);
  });

  return queryKey;
};

export const getOrdersQueryOptions = (params: getOrdersListParameters) => {
  return queryOptions({
    queryKey: ordersQueryKey(params),
    queryFn: (meta) => getOrdersList(params, { signal: meta.signal }),
  });
};

export const getOrdersInfiniteQueryOptions = (
  params: getOrdersListParameters
) => {
  return infiniteQueryOptions<
    WooResponse<OrderResponse[]>,
    Error,
    InfiniteData<WooResponse<OrderResponse[]>, number>,
    readonly unknown[],
    number
  >({
    queryKey: ordersQueryKey(params),
    queryFn: (meta) =>
      getOrdersList(
        { page: meta.pageParam, ...params },
        { signal: meta.signal }
      ),
    initialPageParam: 1,
    getNextPageParam: (_, res, prevPage) => {
      const newPage = prevPage + 1;
      const totalPages = res[0].totalPages;

      const hasNextPage = Number(totalPages) >= newPage;

      return hasNextPage ? newPage : null;
    },
  });
};

const getOrderURL = `${env.WOOCOMMERCE_API}/orders/{id}`;

export const getOrder = async (
  id: number,
  signal: AbortSignal
): Promise<OrderResponse> => {
  const response = await formattedApiInstance.get<unknown, OrderResponse>(
    getOrderURL.replace("{id}", `${id}`),
    {
      signal,
    }
  );

  return response;
};

const orderQueryKey = (id: number) => {
  const queryKey = ["order", id];

  return queryKey;
};

export const getOrderQueryOptions = (id: number) => {
  return queryOptions({
    queryKey: orderQueryKey(id),
    queryFn: (meta) => getOrder(id, meta.signal),
  });
};

export const useGetOrder = ({ id }: { id: number } & QueryOptions) => {
  return useQuery({ ...getOrderQueryOptions(id) });
};

export const createOrder = async ({
  data,
}: {
  data: CreateOrderPayload;
}): Promise<OrderResponse> => {
  return formattedApiInstance.post<unknown, OrderResponse>(ordersListURL, data);
};

export const useCreateOrder = ({
  onSuccess,
  onError,
  ...options
}: UseMutationOptions<
  OrderResponse,
  unknown,
  { data: CreateOrderPayload },
  unknown
>) => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: createOrder,
    onSuccess: (res, variables, context) => {
      queryClient.invalidateQueries(getOrdersQueryOptions({}));
      onSuccess?.(res, variables, context);
    },
    onError: (err, variables, context) => {
      onError?.(err, variables, context);
    },
    ...options,
  });
};

const createOrderRefundURL = `${env.WOOCOMMERCE_API}/orders/{id}/refunds`;

export const createRefundOrder = async ({
  id,
  data,
}: {
  id: number;
  data: RefundOrderPayload;
}): Promise<OrderResponse> => {
  return formattedApiInstance.post<unknown, OrderResponse>(
    createOrderRefundURL.replace("{id}", `${id}`),
    data
  );
};

export const useCreateRefundOrder = ({
  onSuccess,
  onError,
  ...options
}: UseMutationOptions<
  OrderResponse,
  unknown,
  { data: RefundOrderPayload },
  unknown
>) => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: createRefundOrder,
    onSuccess: (res, variables, context) => {
      const orderId = variables.id;

      console.log(getOrdersQueryOptions({}).queryKey, orderId);

      onSuccess?.(res, variables, context);

      queryClient.setQueriesData<InfiniteData<OrderResponse[]> | undefined>(
        { queryKey: getOrdersQueryOptions({}).queryKey },
        (oldData: InfiniteData<OrderResponse[]> | undefined) => {
          console.log(!oldData);
          if (!oldData) return oldData;

          console.log(!oldData);

          const newData = {
            ...oldData,
            pages: oldData.pages.map((page) =>
              page.map((order) =>
                order.id === orderId
                  ? { ...order, status: "refunded" }
                  : { ...order }
              )
            ),
          };

          console.log(newData);

          return newData;
        }
      );
      console.log("после setQueries");
    },
    onError: (err, variables, context) => {
      onError?.(err, variables, context);
    },
    ...options,
  });
};
