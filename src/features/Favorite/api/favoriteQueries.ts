import {
  MutationOptions,
  queryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import {
  addToFavorites,
  clearFavorites,
  getAllFavorites,
  removeFromFavorites,
  updateFavoriteById,
} from "./indexedApi";
import { FavoriteProduct } from "../types";
import { getQueryClient } from "@/shared/api/queryClient";
import { useRef } from "react";
import {
  addToFavoritesListServer,
  clearFavoritesListServer,
  getFavoritesListServer,
  removeFromFavoritesListServer,
  updateFavoriteServer,
} from "./favoriteApi";

import Cookies from "js-cookie";

export const favoriteQueryKey = ["favorite"];

export const getFavoriteQueryOptions = () => {
  return queryOptions({
    queryKey: favoriteQueryKey,
    queryFn: ({ signal }) => {
      const auth_token = Cookies.get("access_token");
      if (auth_token) {
        return getFavoritesListServer({ signal });
      }
      return getAllFavorites();
    },
    staleTime: Infinity,
  });
};

export const useGetAllFavorite = () => {
  return useQuery(getFavoriteQueryOptions());
};

export const useAddToFavorite = ({
  onSuccess,
  onError,
}: MutationOptions<void, Error, FavoriteProduct>) => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: ({
      item,
      signal,
    }: {
      item: FavoriteProduct;
      signal?: AbortSignal;
    }) => {
      const access_token = Cookies.get("access_token");
      if (access_token) {
        return addToFavoritesListServer(item, { signal });
      }

      return addToFavorites(item);
    },
    onMutate: async ({ item }) => {
      console.log("onMutate", item);
      const previousFavorites = queryClient.getQueryData(
        getFavoriteQueryOptions().queryKey
      );

      queryClient.setQueryData(favoriteQueryKey, {
        data: [...(previousFavorites?.data || []), item],
        totalCount: (previousFavorites?.totalCount || 0) + 1,
      });

      return { previousFavorites };
    },
    onError: (_, __, context) => {
      if (context) {
        queryClient.setQueryData(
          getFavoriteQueryOptions().queryKey,
          context.previousFavorites
        );
      }
    },
  });
};

export const useRemoveFromFavorite = ({}: MutationOptions<
  void,
  Error,
  number
>) => {
  const access_token = Cookies.get("access_token");
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: ({ id, signal }: { id: number; signal?: AbortSignal }) => {
      if (access_token) {
        return removeFromFavoritesListServer(id, { signal });
      }

      return removeFromFavorites(id);
    },
    onMutate: async ({ id }) => {
      const previousFavorites = queryClient.getQueryData(
        getFavoriteQueryOptions().queryKey
      );

      if (!previousFavorites) return;

      const newTotalCount =
        previousFavorites.totalCount -
        (previousFavorites.data.find((item) => item.id === id)?.quantity || 0);

      queryClient.setQueryData(favoriteQueryKey, {
        data: previousFavorites?.data?.filter((item) => item.id != id),
        totalCount: newTotalCount,
      });

      return { previousFavorites };
    },
    onError: (_, __, context) => {
      if (context) {
        queryClient.setQueryData(
          getFavoriteQueryOptions().queryKey,
          context.previousFavorites
        );
      }
    },
  });
};

export const useClearFavorites = () => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: ({ signal }: { signal?: AbortSignal }) => {
      const access_token = Cookies.get("access_token");

      console.log(access_token);

      if (access_token) {
        return clearFavoritesListServer({ signal });
      }

      return clearFavorites();
    },
    onMutate: async () => {
      const previousFavorites = queryClient.getQueryData(
        getFavoriteQueryOptions().queryKey
      );

      queryClient.setQueryData(favoriteQueryKey, { data: [], totalCount: 0 });

      return { previousFavorites };
    },
    onError: (_, __, context) => {
      if (context) {
        queryClient.setQueryData(
          getFavoriteQueryOptions().queryKey,
          context.previousFavorites
        );
      }
    },
  });
};

export const useUpdateFavoriteItem = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = getQueryClient();

  const abortRef = useRef<AbortController>(null);

  return useMutation({
    mutationFn: (params: { id: number; quantity: number }) => {
      abortRef.current?.abort();

      const access_token = Cookies.get("access_token");

      const controller = new AbortController();
      abortRef.current = controller;

      if (access_token) {
        return updateFavoriteServer(
          { id: params.id, data: params },
          { signal: controller.signal }
        );
      }

      return updateFavoriteById(
        { id: params.id, data: params },
        controller.signal
      );
    },
    onMutate: async ({ id, quantity }) => {
      await queryClient.cancelQueries(getFavoriteQueryOptions());

      const previousFavorites = queryClient.getQueryData(
        getFavoriteQueryOptions().queryKey
      );

      queryClient.setQueryData(getFavoriteQueryOptions().queryKey, (old) => {
        if (!old || !old.data) return old;

        const favoriteItem = old.data.find((item) => item.id === id);

        if (!favoriteItem) throw new Error("Такого товара не существует");

        const updateType = favoriteItem?.quantity > quantity ? "minus" : "plus";

        return {
          totalCount:
            updateType === "plus" ? old.totalCount + 1 : old.totalCount - 1,
          data: old.data.map((favoriteItem) =>
            favoriteItem.id === id
              ? { ...favoriteItem, quantity: quantity }
              : favoriteItem
          ),
        };
      });

      return { previousFavorites };
    },
    onSuccess: (res) => {
      // if (res) {
      //   queryClient.setQueryData(getCartQueryOptions().queryKey, res.data);
      //   onSuccess?.();
      // }
    },
    onError: (error, __, context) => {
      if (context) {
        queryClient.setQueryData(
          getFavoriteQueryOptions().queryKey,
          context.previousFavorites
        );
      }

      onError?.(error);
    },
  });
};
