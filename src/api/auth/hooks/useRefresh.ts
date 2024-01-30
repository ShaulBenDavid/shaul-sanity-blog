"use client";

import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { refresh } from "../auth.methods";
import { HttpStatusCode } from "@/src/types";
import type { AuthResponseType } from "..";

export const GET_REFRESH_KEY = "getRefresh";

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
  const { refetch, isError, isLoading, error, isSuccess, data } = useQuery({
    queryKey: [GET_REFRESH_KEY],
    queryFn: refresh,
    enabled,
    staleTime: 0,
    gcTime: 0,
  });

  useEffect(() => {
    if (isSuccess && data) {
      handleSuccess(data);
    }
  }, [handleSuccess, isSuccess, data]);

  useEffect(() => {
    if (error && axios.isAxiosError(error)) {
      if (error?.response?.status === HttpStatusCode.UNAUTHORIZED) {
        handleLogout();
      }
    }
  }, [error, handleLogout]);

  return {
    refresh: refetch,
    isRefreshLoading: isLoading,
    isRefreshError: isError,
    refreshError: axios.isAxiosError(error) ? error : undefined,
  };
};
