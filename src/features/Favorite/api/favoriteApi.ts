import { requestQueue } from "@/shared/api/requestQueue";
import { FavoriteProduct, FavoriteResponse } from "../types";
import { formattedApiInstance } from "@/shared/api/formattedApiInstance";

const favoritesListURL = `/favorites/v1/items`;

export const getFavoritesListServer = async ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<FavoriteResponse> => {
  const response = await requestQueue.addRequest<FavoriteResponse>(
    () =>
      formattedApiInstance.get<unknown, FavoriteResponse>(favoritesListURL, {
        signal,
      }),
    "medium"
  );

  return response;
};

export const addToFavoritesListServer = async (
  data: FavoriteProduct,
  {
    signal,
  }: {
    signal?: AbortSignal;
  }
): Promise<void> => {
  const response = await formattedApiInstance.post<unknown, void>(
    favoritesListURL,
    data,
    {
      signal,
    }
  );

  return response;
};

const removeFromFavoritesListURL = `/favorites/v1/items/{id}`;

export const removeFromFavoritesListServer = async (
  id: number,
  {
    signal,
  }: {
    signal?: AbortSignal;
  }
): Promise<void> => {
  const response = await formattedApiInstance.delete<unknown, void>(
    removeFromFavoritesListURL.replace("{id}", `${id}`),
    {
      signal,
    }
  );

  return response;
};

const updateFavoriteByIdURL = `/favorites/v1/items/{id}`;

export const updateFavoriteServer = async (
  { id, data }: { id: number; data: Partial<FavoriteProduct> },
  {
    signal,
  }: {
    signal?: AbortSignal;
  }
): Promise<void> => {
  const response = await formattedApiInstance.patch<unknown, void>(
    updateFavoriteByIdURL.replace("{id}", `${id}`),
    data,
    {
      signal,
    }
  );

  return response;
};

export const clearFavoritesListServer = async ({
  signal,
}: {
  signal?: AbortSignal;
}): Promise<void> => {
  const response = await formattedApiInstance.delete<unknown, void>(
    favoritesListURL,
    {
      signal,
    }
  );

  return response;
};
