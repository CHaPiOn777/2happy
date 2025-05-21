import { env } from "@/config/env";
import { defaultApiInstance } from "@/shared/api/defaultApiInstance";
import { formattedApiInstance } from "@/shared/api/formattedApiInstance";
import {
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";

import Cookies from "js-cookie";
import { CartResponse } from "../types";
import { AxiosResponse } from "axios";
import { useEffect } from "react";
const getCartURL = `${env.WOOCOMMERCE_STORE_API}/cart`;

export const fetchNonce = async (): Promise<string> => {
  const response = await defaultApiInstance.get(getCartURL);

  const nonce = response.headers["nonce"];

  Cookies.set("nonce", nonce);

  if (!nonce) {
    console.error("No nonce found");
  }

  return nonce;
};

const getCart = async (): Promise<{
  data: CartResponse;
  headers: Record<string, unknown>;
}> => {
  const res = await defaultApiInstance.get<
    unknown,
    AxiosResponse<CartResponse>
  >(getCartURL);

  return {
    data: res.data,
    headers: res.headers,
  };
};

export const getCartQueryOptions = () =>
  queryOptions({
    queryKey: ["cart"],
    queryFn: getCart,
  });

export const useCart = () => {
  const { data, isSuccess, ...other } = useQuery({
    ...getCartQueryOptions(),
  });

  useEffect(() => {
    if (isSuccess) {
      const nonce = data.headers["nonce"] as string;

      Cookies.set("nonce", nonce);
    }
  }, [isSuccess]);

  return { data: data?.data, isSuccess, ...other };
};

export const useSuspenseCart = () => {
  return useSuspenseQuery({
    ...getCartQueryOptions(),
  });
};
