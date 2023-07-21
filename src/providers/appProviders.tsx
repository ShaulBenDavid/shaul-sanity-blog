'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { QueryProvider } from './query.provider';
import { AxiosInterceptor } from '../api';
import { AuthContextProvider } from '../context/auth';
import { AuthProvider } from './auth.provider';
import 'react-toastify/dist/ReactToastify.css';

export const AppProviders = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <QueryProvider>
    <AuthContextProvider>
      <AxiosInterceptor>
        <AuthProvider>
          {children}
          <ToastContainer />
          <ProgressBar
            height="4px"
            color="#810ca8"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </AuthProvider>
      </AxiosInterceptor>
    </AuthContextProvider>
  </QueryProvider>
);
