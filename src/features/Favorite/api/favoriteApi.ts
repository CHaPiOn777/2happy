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

export const favoriteQueryKey = ["favorite"];

export const getFavoriteQueryOptions = () =>
  queryOptions({
    queryKey: favoriteQueryKey,
    queryFn: () => getAllFavorites(),
  });

export const useGetAllFavorite = () => {
  return useQuery(getFavoriteQueryOptions());
};

export const useAddToFavorite = ({
  onSuccess,
  onError,
}: MutationOptions<void, Error, FavoriteProduct>) => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: (item: FavoriteProduct) => addToFavorites(item),
    onMutate: async (item) => {
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
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: (id: number) => removeFromFavorites(id),
    onMutate: async (id) => {
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
    mutationFn: () => clearFavorites(),
    onMutate: async () => {
      const previousFavorites = queryClient.getQueryData(
        getFavoriteQueryOptions().queryKey
      );

      queryClient.setQueryData(favoriteQueryKey, []);

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

      const controller = new AbortController();
      abortRef.current = controller;

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
