'use client';

import React from 'react';
import { QueryProvider } from './query.provider';
import { AxiosInterceptor } from '../api';
import { AuthContextProvider } from '../context/auth';
import { AuthProvider } from './auth.provider';

export const AppProviders = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <QueryProvider>
    <AuthContextProvider>
      <AxiosInterceptor>
        <AuthProvider>{children}</AuthProvider>
      </AxiosInterceptor>
    </AuthContextProvider>
  </QueryProvider>
);
