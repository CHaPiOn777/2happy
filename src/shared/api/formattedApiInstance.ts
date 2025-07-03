import { env } from "@/config/env";
import { WooResponse } from "@/shared/types/api";
import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

import Cookies from "js-cookie";
import { parseJwt } from "../utils/parseJWT";

export const formattedApiInstance: AxiosInstance = axios.create({
  baseURL: `${env.APP_URL}/api`,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

type TRequestConfig = InternalAxiosRequestConfig<
  AxiosRequestConfig & { headers: { Authorization?: string; Lang: string } }
>;
type TRequestInterceptor = (config: TRequestConfig) => Promise<TRequestConfig>;

const requestInterceptor: TRequestInterceptor = async (config) => {
  const headers = new AxiosHeaders({ ...config.headers });

  const access_token = Cookies.get("access_token");

  console.log(config.url);

  const parsedToken = parseJwt(access_token);

  if (parsedToken && parsedToken.exp) {
    headers.set("Authorization", `Bearer ${access_token}`);
  }

  if (config.url?.includes(env.WOOCOMMERCE_API)) {
    const base = btoa(
      `${env.WOOCOMMERCE_USERNAME}:${env.WOOCOMMERCE_PASSWORD}`
    );
    headers.set("Authorization", `Basic ${base}`);
  }

  return { ...config, headers };
};

export const responseErrorInterceptor = (error: AxiosError) => {
  if (error.message === "canceled") return;

  if (error.response) {
    console.error("URL - ", error.config?.baseURL);
    console.error(
      'Ответ сервера - "Ошибка":',
      error.response.status,
      error.response.data
    );
  } else if (error.request) {
    console.error("Ошибка при выполнении запроса:", error.request);
  } else {
    console.error("Произошла ошибка:", error.message);
  }
  return Promise.reject(error);
};

formattedApiInstance.interceptors.request.use(
  requestInterceptor,
  (error) => error
);

formattedApiInstance.interceptors.response.use((config) => {
  if (config.headers["x-wp-total"] && config.headers["x-wp-totalpages"]) {
    const response: WooResponse<typeof config.data> = {
      items: config.data,
      totalItems: config.headers["x-wp-total"],
      totalPages: config.headers["x-wp-totalpages"],
    };
    return response;
  }
  return config.data;
}, responseErrorInterceptor);

export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>;
