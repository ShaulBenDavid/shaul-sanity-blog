import { AxiosError, AxiosResponse } from 'axios';

export const resInterceptor = (response: AxiosResponse) => {
  return response;
};

export const errInterceptor = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};
