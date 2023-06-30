'use client';

import React from 'react';
import { QueryProvider } from './query.provider';
import { AxiosInterceptor } from '../api';

export const AppProviders = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => (
  <QueryProvider>
    <AxiosInterceptor>{children}</AxiosInterceptor>
  </QueryProvider>
);
