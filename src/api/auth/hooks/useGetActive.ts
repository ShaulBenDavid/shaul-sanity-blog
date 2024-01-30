"use client";

import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getActive } from "../auth.methods";
import type { GetActiveParamsType } from "../auth.types";

const GET_ACTIVE_KEY = "getActive";

interface UseGetActiveProps {
  handleSuccess?: () => void;
  handleError?: () => void;
  params: GetActiveParamsType;
}

export const useGetActive = ({
  handleSuccess,
  handleError,
  params,
}: UseGetActiveProps) => {
  const { data, isError, isLoading, isSuccess, error } = useQuery({
    queryKey: [GET_ACTIVE_KEY, params],
    queryFn: () => params && getActive(params),
    gcTime: 0,
  });

  useEffect(() => {
    if (isSuccess && data && handleSuccess) {
      handleSuccess();
    }
  }, [handleSuccess, isSuccess, data]);

  useEffect(() => {
    if (error && handleError) {
      handleError();
    }
  }, [handleError, error]);

  return {
    getActiveData: data,
    isGetActiveLoading: isLoading,
    isGetActiveError: isError,
    isGetActiveSuccess: isSuccess,
    getActiveError: axios.isAxiosError(error) ? error : undefined,
  };
};
