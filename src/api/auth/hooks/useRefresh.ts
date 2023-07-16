'use client';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { refresh } from '../auth.methods';
import { HttpStatusCode } from '@/src/types';

export const GET_REFRESH_KEY = 'getRefresh';

interface UseRefreshProps {
  handleSuccess: () => void;
  handleLogout: () => void;
}

export const useRefresh = ({
  handleSuccess,
  handleLogout,
}: UseRefreshProps) => {
  const { refetch, isError, isLoading, error } = useQuery(
    [GET_REFRESH_KEY],
    refresh,
    {
      onSuccess: () => handleSuccess(),
      onError: (err) => {
        if (!axios.isAxiosError(err)) {
          return;
        }
        if (err?.response?.status === HttpStatusCode.UNAUTHORIZED) {
          handleLogout();
        }
      },
    }
  );

  return {
    refresh: refetch,
    isRefreshLoading: isLoading,
    isRefreshError: isError,
    refreshError: axios.isAxiosError(error) ? error : undefined,
  };
};
