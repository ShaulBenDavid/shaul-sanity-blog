'use client';

import { useLayoutEffect } from 'react';
import { dwInstance } from './http.service';
import { errInterceptor, resInterceptor } from './axiosinterceptor.utils';

export const AxiosInterceptor = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  useLayoutEffect(() => {
    const interceptor = dwInstance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => dwInstance.interceptors.response.eject(interceptor);
  }, []);
  return children;
};
