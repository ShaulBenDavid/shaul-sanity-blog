'use client';

import React from 'react';
import { QueryProvider } from './query.provider';
import { AxiosInterceptor } from '../api';
import { AuthContextProvider } from '../context/auth';

export const AppProviders = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => (
  <QueryProvider>
    <AuthContextProvider>
      <AxiosInterceptor>{children}</AxiosInterceptor>
    </AuthContextProvider>
  </QueryProvider>
);
