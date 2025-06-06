import { formattedApiInstance } from "@/shared/api/formattedApiInstance";
import { Category } from "../types";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { env } from "@/config/env";
import { WooResponse } from "@/shared/types/api";
import { createURLWithParams } from "@/shared/utils/createURLWithParams";

//------------ Categories List ------------\\

export type getCategoriesListParameters = {
  parent?: number;
  per_page?: number;
  order?: string;
  orderby?: string;
};

export const getCategoriesListURL = `${env.WOOCOMMERCE_API}/products/categories`;

export const getCategoriesList = async (
  params?: getCategoriesListParameters
): Promise<WooResponse<Category[]>> => {
  if (!params?.per_page) params = { ...params, per_page: 30 };
  const getCategoriesListURLWithParams = createURLWithParams(
    getCategoriesListURL,
    params
  );

  const response = await formattedApiInstance.get<
    unknown,
    WooResponse<Category[]>
  >(getCategoriesListURLWithParams);

  return response;
};

export const categoriesListQueryKey = (
  params?: getCategoriesListParameters
) => ["categories", `parent ${params?.parent}`];

export const getCategoriesQueryOptions = (
  params?: getCategoriesListParameters
) => {
  return queryOptions({
    queryKey: categoriesListQueryKey(params),
    queryFn: () => getCategoriesList(params),
    staleTime: Infinity,
  });
};

export const useCategories = (params?: getCategoriesListParameters) =>
  useQuery({
    ...getCategoriesQueryOptions(params),
    retry: false,
  });

//------------ Categories With Tag ------------\\

export type getCategoriesWithTagParameters = {
  tag?: number;
  parent_cat?: number;
};

export const getCategoriesWithTagURL = `${env.CUSTOM_API}/categories-with-tag`;

export const getCategoriesWithTag = async (
  params?: getCategoriesWithTagParameters
): Promise<Category[]> => {
  const getCategoriesWithTagURLWithParams = createURLWithParams(
    getCategoriesWithTagURL,
    params
  );

  const response = await formattedApiInstance.get<unknown, Category[]>(
    getCategoriesWithTagURLWithParams
  );

  return response;
};

export const categoriesWithTagQueryKey = (
  params?: getCategoriesWithTagParameters
) => [
  "categoriesWithTag",
  `tag ${params?.tag}`,
  `parent_cat ${params?.parent_cat}`,
];

export const getCategoriesWithTagQueryOptions = (
  params?: getCategoriesWithTagParameters
) => {
  return queryOptions({
    queryKey: categoriesWithTagQueryKey(params),
    queryFn: () => getCategoriesWithTag(params),
    staleTime: Infinity,
  });
};

//--------------------- Category ---------------------\\

export const getCategoryURL = `${env.WOOCOMMERCE_API}/products/categories/{id}`;

export const getCategory = async (id: number | null): Promise<Category> => {
  const response = await formattedApiInstance.get<unknown, Category>(
    getCategoryURL.replace("{id}", `${id}`)
  );

  return response;
};

export const categoryQueryKey = (id: number | null) => ["category", id];

export const getCategoryQueryOptions = (id: number | null) => {
  return queryOptions({
    queryKey: categoryQueryKey(id),
    queryFn: () => getCategory(id),
    enabled: !!id,
    staleTime: Infinity,
  });
};

export const useCategory = (id: number | null) =>
  useQuery({
    ...getCategoryQueryOptions(id),
    retry: false,
  });
