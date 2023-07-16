'use client';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { refresh } from '../auth.methods';
import { HttpStatusCode } from '@/src/types';
import { AuthResponseType } from '..';

export const GET_REFRESH_KEY = 'getRefresh';

interface UseRefreshProps {
  handleSuccess: (res: AuthResponseType) => void;
  handleLogout: () => void;
  enabled?: boolean;
}

export const useRefresh = ({
  handleSuccess,
  handleLogout,
  enabled = true,
}: UseRefreshProps) => {
  const { refetch, isError, isLoading, error } = useQuery(
    [GET_REFRESH_KEY],
    refresh,
    {
      onSuccess: (res) => handleSuccess(res),
      onError: (err) => {
        if (!axios.isAxiosError(err)) {
          return;
        }
        if (err?.response?.status === HttpStatusCode.UNAUTHORIZED) {
          handleLogout();
        }
      },
      enabled,
    }
  );

  return {
    refresh: refetch,
    isRefreshLoading: isLoading,
    isRefreshError: isError,
    refreshError: axios.isAxiosError(error) ? error : undefined,
  };
};
