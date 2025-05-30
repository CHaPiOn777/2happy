import { formattedApiInstance } from "@/shared/api/formattedApiInstance";
import {
  InfiniteData,
  infiniteQueryOptions,
  queryOptions,
} from "@tanstack/react-query";
import { env } from "@/config/env";
import { createURLWithParams } from "@/shared/utils/createURLWithParams";
import { ProductServer, ProductVariation } from "../types";
import { WooResponse } from "@/shared/types/api";

export type getProductsListParameters = {
  page?: number;
  per_page?: number;
  category?: number;
  type?: string;
  exclude_type?: string;
  tag?: number;
  min_price?: number;
  max_price?: number;
  order?: string;
  orderby?: string;
  color?: number[];
  size?: number[];
  include?: number[];
};

const getProductsListURL = `${env.WOOCOMMERCE_API}/products`;

export const getProductsList = async (
  params: getProductsListParameters,
  { signal }: { signal: AbortSignal }
): Promise<WooResponse<ProductServer[]>> => {
  const getProductsListURLWithParams = createURLWithParams(
    getProductsListURL,
    params
  );

  const response = await formattedApiInstance.get<
    unknown,
    WooResponse<ProductServer[]>
  >(getProductsListURLWithParams, {
    signal,
  });

  return response;
};

const productsQueryKey = (params: getProductsListParameters) => {
  const queryKey = ["products"];

  Object.entries(params).forEach(([key, value]) => {
    if (value instanceof Array) {
      if (value.length) queryKey.push(`${key} ${value}`);
    } else {
      if (value) queryKey.push(`${key} ${value}`);
    }
  });

  return queryKey;
};

export const getProductsQueryOptions = (params: getProductsListParameters) => {
  return queryOptions({
    queryKey: productsQueryKey(params),
    queryFn: (meta) => getProductsList({ ...params }, { signal: meta.signal }),
  });
};

export const getProductsInfiniteQueryOptions = (
  params: getProductsListParameters
) => {
  return infiniteQueryOptions<
    WooResponse<ProductServer[]>,
    Error,
    InfiniteData<WooResponse<ProductServer[]>, number>,
    readonly unknown[],
    number
  >({
    queryKey: productsQueryKey(params),
    queryFn: (meta) =>
      getProductsList(
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

const getProductByIdURL = `${env.WOOCOMMERCE_API}/products/{id}`;

export const getProductById = async (
  id: number,
  {
    signal,
  }: {
    signal: AbortSignal;
  }
): Promise<ProductServer> => {
  const response = await formattedApiInstance.get<unknown, ProductServer>(
    getProductByIdURL.replace("{id}", `${id}`),
    {
      signal,
    }
  );

  return response;
};

const productByIdQueryKey = (id: number) => ["product", id];

export const getProductByIdQueryOptions = (id: number) => {
  return queryOptions({
    queryKey: productByIdQueryKey(id),
    queryFn: (meta) => getProductById(id, { signal: meta.signal }),
    enabled: !!id,
  });
};

const getProductVariationsURL = `${env.WOOCOMMERCE_API}/products/{id}/variations`;

const getProductVariations = async (
  id: number,
  {
    signal,
  }: {
    signal: AbortSignal;
  }
): Promise<WooResponse<ProductVariation[]>> => {
  const response = await formattedApiInstance.get<
    unknown,
    WooResponse<ProductVariation[]>
  >(getProductVariationsURL.replace("{id}", `${id}`), {
    signal,
  });

  return response;
};

const productVariationsQueryKey = (id: number) => ["product", id, "variations"];

export const getProductVariationsQueryOptions = (id: number) => {
  return queryOptions({
    queryKey: productVariationsQueryKey(id),
    queryFn: (meta) => getProductVariations(id, { signal: meta.signal }),
    enabled: !!id,
  });
};

type getProductVariationsListParams = {
  ids: number[];
};

const getProductVariationsListURL = `${env.CUSTOM_API}/variations`;

export const getProductVariationsList = async (
  params: getProductVariationsListParams
): Promise<ProductVariation[]> => {
  const getProductVariationsListURLWithParams = createURLWithParams(
    getProductVariationsListURL,
    params
  );

  const response = await formattedApiInstance.get<unknown, ProductVariation[]>(
    getProductVariationsListURLWithParams
  );

  return response;
};

const productVariationsListQueryKey = ({
  ids,
}: getProductVariationsListParams) => ["variations", ...ids];

export const getProductVariationsListQueryOptions = (
  params: getProductVariationsListParams
) => {
  return queryOptions({
    queryKey: productVariationsListQueryKey(params),
    queryFn: (meta) => getProductVariationsList(params),
  });
};

type getRelatedProductsParameters = {
  product_ids?: number[];
  per_page?: number;
};

const getRelatedProductsURL = `${env.CUSTOM_API}/related-products`;

const getRelatedProducts = async (
  params: getRelatedProductsParameters,
  { signal }: { signal: AbortSignal }
): Promise<ProductServer[]> => {
  const getRelatedProductsURLWithParams = createURLWithParams(
    getRelatedProductsURL,
    params
  );

  const response = await formattedApiInstance.get<unknown, ProductServer[]>(
    getRelatedProductsURLWithParams,
    {
      signal,
    }
  );

  return response;
};

const relatedProductsQueryKey = ({
  product_ids,
}: getRelatedProductsParameters) => ["relatedProducts", `${product_ids}`];

export const getRelatedProductsQueryOptions = (
  params: getRelatedProductsParameters
) => {
  return queryOptions({
    queryKey: relatedProductsQueryKey(params),
    queryFn: (meta) => getRelatedProducts(params, { signal: meta.signal }),
  });
};

type getHasPurchasedParameters = {
  product_id?: number;
};

const getHasPurchasedURL = `${env.CUSTOM_API}/has-purchased`;

const getHasPurchased = async (
  params: getHasPurchasedParameters,
  { signal }: { signal: AbortSignal }
): Promise<{ hasPurchased: boolean }> => {
  const getHasPurchasedURLWithParams = createURLWithParams(
    getHasPurchasedURL,
    params
  );

  const response = await formattedApiInstance.get<
    unknown,
    { hasPurchased: boolean }
  >(getHasPurchasedURLWithParams, {
    signal,
  });

  return response;
};

const hasPurchasedQueryKey = ({ product_id }: getHasPurchasedParameters) => [
  "has_purchased",
  `${product_id}`,
];

export const getHasPurchasedQueryOptions = (
  params: getHasPurchasedParameters
) => {
  return queryOptions({
    queryKey: hasPurchasedQueryKey(params),
    queryFn: (meta) => getHasPurchased(params, { signal: meta.signal }),
  });
};
