'use client';

import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { refresh } from '../auth.methods';

const GET_REFRESH_KEY = 'getRefresh';

interface UseRefreshProps {
  handleSuccess: () => void;
}

export const useRefresh = ({ handleSuccess }: UseRefreshProps) => {
  const { mutate, isError, isLoading, error } = useMutation(
    [GET_REFRESH_KEY],
    refresh,
    {
      onSuccess: () => handleSuccess(),
    }
  );

  return {
    logout: mutate,
    isRefreshLoading: isLoading,
    isRefreshError: isError,
    refreshError: axios.isAxiosError(error) ? error : undefined,
  };
};
