import { env } from "@/config/env";
import { defaultApiInstance } from "@/shared/api/defaultApiInstance";
import { queryOptions, useQuery } from "@tanstack/react-query";

import Cookies from "js-cookie";
import { CartResponse } from "../types";
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

const getCart = async (): Promise<CartResponse> => {
  const response = await defaultApiInstance.get(getCartURL);

  const nonce = response.headers["nonce"];

  if (nonce) {
    Cookies.set("nonce", nonce);
  }

  return response.data;
};

export const getCartQueryOptions = () =>
  queryOptions({
    queryKey: ["cart"],
    queryFn: getCart,
  });

export const useCart = () => {
  return useQuery({
    ...getCartQueryOptions(),
  });
};
