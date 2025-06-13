import { formattedApiInstance } from "@/shared/api/formattedApiInstance";
import { createURLWithParams } from "@/shared/utils";
import { WPComment } from "../types";
import {
  InfiniteData,
  infiniteQueryOptions,
  queryOptions,
} from "@tanstack/react-query";
import { WooResponse } from "@/shared/types/api";

export type getCommentsListParameters = {
  page?: number;
  per_page?: number;
  order?: string;
  orderby?: string;
};

const getCommentsListURL = `/wp/v2/comments`;

export const getCommentsList = async (
  params: getCommentsListParameters,
  { signal }: { signal: AbortSignal }
): Promise<WooResponse<WPComment[]>> => {
  const getCommentsListURLWithParams = createURLWithParams(
    getCommentsListURL,
    params
  );

  const response = await formattedApiInstance.get<
    unknown,
    WooResponse<WPComment[]>
  >(getCommentsListURLWithParams, {
    signal,
  });

  return response;
};

const commentsQueryKey = (params: getCommentsListParameters) => {
  const queryKey = ["comments"];

  Object.entries(params).forEach(([key, value]) => {
    if (value) queryKey.push(`${key} ${value}`);
  });

  return queryKey;
};

export const getCommentsListQueryOptions = (
  params: getCommentsListParameters
) => {
  return queryOptions({
    queryKey: commentsQueryKey(params),
    queryFn: (meta) => getCommentsList({ ...params }, { signal: meta.signal }),
  });
};

export const getCommentsListInfiniteQueryOptions = (
  params: getCommentsListParameters
) => {
  return infiniteQueryOptions<
    WooResponse<WPComment[]>,
    Error,
    InfiniteData<WooResponse<WPComment[]>, number>,
    readonly unknown[],
    number
  >({
    queryKey: commentsQueryKey(params),
    queryFn: (meta) =>
      getCommentsList(
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
