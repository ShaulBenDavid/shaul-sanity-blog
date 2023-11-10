import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { HttpStatusCode } from "../types";
import { dwInstance } from "./http.service";

export const axiosRequest = (
  config: InternalAxiosRequestConfig,
  token?: string,
): InternalAxiosRequestConfig => {
  // eslint-disable-next-line no-param-reassign
  config.headers = config.headers ?? {};
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = token ? `Bearer ${token}` : "";

  return config;
};

export const resInterceptor = (response: AxiosResponse) => {
  return response;
};

export const errInterceptor = async (
  error: AxiosError,
  refresh: () => void,
  token?: string,
): Promise<AxiosError> => {
  const prevConfig:
    | (InternalAxiosRequestConfig & { sent?: boolean })
    | undefined = error.config;

  if (
    error.response?.status === HttpStatusCode.UNAUTHORIZED &&
    token &&
    prevConfig &&
    !prevConfig.sent
  ) {
    await refresh();
    prevConfig.sent = true;
    prevConfig.headers = prevConfig.headers ?? {};
    prevConfig.headers.Authorization = `Bearer ${token}`;
    return dwInstance(prevConfig);
  }
  return Promise.reject(error);
};
