import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  url: process.env.NEXT_PUBLIC_DEV_WIZARD_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

export const dwInstance: AxiosInstance = axios.create(config);

export const apiMethodInstance = <T>(
  options: AxiosRequestConfig
): Promise<T> => {
  return dwInstance(options).then((res) => res.data);
};
