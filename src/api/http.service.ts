import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_DEV_WIZARD_URL;

const config: AxiosRequestConfig = {
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

export const dwInstance: AxiosInstance = axios.create(config);

export const apiMethodInstance = <T>(
  options: AxiosRequestConfig
): Promise<T> => {
  return dwInstance(options).then((res) => res.data);
};
