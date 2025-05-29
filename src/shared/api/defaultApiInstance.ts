import { env } from "@/config/env";
import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

import Cookies from "js-cookie";
import { parseJwt } from "../utils/parseJWT";

export const defaultApiInstance: AxiosInstance = axios.create({
  baseURL: `${env.API_URL}`,
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

  const parsedToken = parseJwt(access_token);

  if (parsedToken && parsedToken.exp) {
    headers.set("Authorization", `Bearer ${access_token}`);
  }

  return { ...config, headers };
};

export const responseErrorInterceptor = (error: AxiosError) => {
  if (error.message === "canceled") return;

  if (error.response) {
    console.error("URL - ", error.config?.baseURL);
    console.error("URL - ", error.response.config?.baseURL);
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

defaultApiInstance.interceptors.request.use(
  requestInterceptor,
  (error) => error
);

defaultApiInstance.interceptors.response.use(
  (config) => config,
  responseErrorInterceptor
);

export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>;
