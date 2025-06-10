import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createURLWithParams } from "@/shared/utils/createURLWithParams";
import { env } from "@/config/env";
import { CartResponse } from "../types";
import { AxiosResponse } from "axios";

import Cookies from "js-cookie";
import { getCartQueryOptions } from "./cartQueries";
import { defaultApiInstance } from "@/shared/api/defaultApiInstance";
import { getQueryClient } from "@/shared/api/queryClient";
import { useRef } from "react";

export type AddToCartParams = {
  id?: number;
  quantity?: number;
};

const addToCartURL = `${env.WOOCOMMERCE_STORE_API}/cart/add-item`;

const addToCart = ({
  params,
  nonce,
}: {
  params: AddToCartParams;
  nonce: string | undefined;
}): Promise<AxiosResponse<CartResponse>> => {
  const addToCartURLWithParams = createURLWithParams(addToCartURL, params);

  return defaultApiInstance.post<unknown, AxiosResponse<CartResponse>>(
    addToCartURLWithParams,
    null,
    {
      headers: {
        Nonce: nonce,
      },
    }
  );
};

export const useAddToCart = ({
  onSuccess,
  onError,
  onMutate,
}: {
  onMutate?: (params: AddToCartParams) => void;
  onSuccess?: (data: CartResponse) => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();

  const nonce = Cookies.get("nonce");

  return useMutation({
    mutationFn: (params: AddToCartParams) => addToCart({ params, nonce }),
    onMutate,
    onSuccess: (res) => {
      const oldNonce = Cookies.get("nonce");
      const newNonce = res.headers["nonce"];

      if (newNonce != oldNonce) Cookies.set("nonce", newNonce);
      queryClient.setQueryData(getCartQueryOptions().queryKey, res.data);
      onSuccess?.(res.data);
    },
    onError,
  });
};

export type DeleteFromCartParams = {
  key: string;
};

const deleteCartItemURL = `${env.WOOCOMMERCE_STORE_API}/cart/remove-item`;

const deleteCartItem = ({
  params,
  nonce,
}: {
  params: DeleteFromCartParams;
  nonce: string | undefined;
}): Promise<AxiosResponse<CartResponse>> => {
  const deleteCartItemURLWithParams = createURLWithParams(
    deleteCartItemURL,
    params
  );

  return defaultApiInstance.post<unknown, AxiosResponse<CartResponse>>(
    deleteCartItemURLWithParams,
    null,
    {
      headers: {
        Nonce: nonce,
      },
    }
  );
};

export const useDeleteCartItem = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = getQueryClient();

  const nonce = Cookies.get("nonce");

  return useMutation({
    mutationFn: (params: DeleteFromCartParams) =>
      deleteCartItem({ params, nonce }),
    onSuccess: (res) => {
      const oldNonce = Cookies.get("nonce");
      const newNonce = res.headers["nonce"];

      if (newNonce != oldNonce) Cookies.set("nonce", newNonce);
      queryClient.setQueryData(getCartQueryOptions().queryKey, res.data);
      onSuccess?.();
    },
    onError,
  });
};

export type UpdateCartItemParams = {
  key: string;
  quantity: number;
};

const updateCartItemURL = `${env.WOOCOMMERCE_STORE_API}/cart/update-item`;

const updateCartItem = ({
  params,
  nonce,
  signal,
}: {
  params: UpdateCartItemParams;
  nonce: string | undefined;
  signal: AbortSignal;
}): Promise<AxiosResponse<CartResponse>> => {
  const updateCartItemURLWithParams = createURLWithParams(
    updateCartItemURL,
    params
  );

  return defaultApiInstance.post<unknown, AxiosResponse<CartResponse>>(
    updateCartItemURLWithParams,
    null,
    {
      signal,
      headers: {
        Nonce: nonce,
      },
    }
  );
};

export const useUpdateCartItem = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = getQueryClient();

  const nonce = Cookies.get("nonce");

  const abortRef = useRef<AbortController>(null);

  return useMutation({
    mutationFn: (params: UpdateCartItemParams) => {
      abortRef.current?.abort();

      const controller = new AbortController();
      abortRef.current = controller;

      return updateCartItem({ params, nonce, signal: controller.signal });
    },
    onMutate: async (newCartItem) => {
      await queryClient.cancelQueries(getCartQueryOptions());

      const previousCart = queryClient.getQueryData(
        getCartQueryOptions().queryKey
      );

      queryClient.setQueryData(getCartQueryOptions().queryKey, (old) => {
        if (!old || !old.items) return old;

        const cartItem = old.items.find((item) => item.key === newCartItem.key);

        if (!cartItem) throw new Error("Такого товара не существует");

        const updateType =
          cartItem?.quantity > newCartItem.quantity ? "minus" : "plus";

        return {
          ...old,
          items_count:
            updateType === "plus" ? old.items_count + 1 : old.items_count - 1,
          totals: {
            ...old.totals,
            total_price:
              updateType === "plus"
                ? `${
                    Number(old.totals.total_price) +
                    Number(cartItem?.prices.price)
                  }`
                : `${
                    Number(old.totals.total_price) -
                    Number(cartItem?.prices.price)
                  }`,
          },
          items: old.items.map((cartItem) =>
            cartItem.key === newCartItem.key
              ? { ...cartItem, quantity: newCartItem.quantity }
              : cartItem
          ),
        };
      });

      return { previousCart };
    },
    onSuccess: (res) => {
      if (res) {
        const oldNonce = Cookies.get("nonce");
        const newNonce = res.headers["nonce"];

        if (newNonce != oldNonce) Cookies.set("nonce", newNonce);
        queryClient.setQueryData(getCartQueryOptions().queryKey, res.data);
        onSuccess?.();
      }
    },
    onError: (error, __, context) => {
      if (context) {
        queryClient.setQueryData(
          getCartQueryOptions().queryKey,
          context.previousCart
        );
      }

      onError?.(error);
    },
  });
};

const deleteCartURL = `${env.CUSTOM_API}/clear-cart`;

const deleteCart = ({
  nonce,
}: {
  nonce: string | undefined;
}): Promise<AxiosResponse<CartResponse>> => {
  return defaultApiInstance.post<unknown, AxiosResponse<CartResponse>>(
    deleteCartURL,
    {
      headers: {
        Nonce: nonce,
      },
    }
  );
};

export const useDeleteCart = ({
  onSuccess,
  onError,
  onMutate,
}: {
  onMutate?: () => void;
  onSuccess?: (data: CartResponse) => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();

  const nonce = Cookies.get("nonce");

  return useMutation({
    mutationFn: () => deleteCart({ nonce }),
    onMutate,
    onSuccess: (res) => {
      const oldNonce = Cookies.get("nonce");
      const newNonce = res.headers["nonce"];

      if (newNonce != oldNonce) Cookies.set("nonce", newNonce);
      queryClient.invalidateQueries(getCartQueryOptions());
      onSuccess?.(res.data);
    },
    onError,
  });
};
