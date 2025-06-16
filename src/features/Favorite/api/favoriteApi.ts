import {
  MutationOptions,
  queryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import {
  addToFavorites,
  clearFavorites,
  FavoriteProduct,
  getAllFavorites,
  removeFromFavorites,
} from "./indexedApi";
import { getQueryClient } from "@/shared/api/queryClient";

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

      queryClient.setQueryData(favoriteQueryKey, [
        ...(previousFavorites || []),
        item,
      ]);

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

      queryClient.setQueryData(
        favoriteQueryKey,
        previousFavorites?.filter((item) => item.id != id)
      );

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
