'use client';

import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { appQueryClient } from '../queries';

export const QueryProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={appQueryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
