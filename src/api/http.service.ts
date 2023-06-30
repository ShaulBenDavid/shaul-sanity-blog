import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  url: process.env.NEXT_PUBLIC_DEV_WIZARD_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

const dwInstance = axios.create(config);

export const apiMethod = <T>(options: AxiosRequestConfig): Promise<T> => {
  return dwInstance(options).then((res) => res.data);
};
