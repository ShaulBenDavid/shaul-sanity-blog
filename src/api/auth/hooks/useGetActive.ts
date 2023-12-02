"use client";

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
  const { data, isError, isLoading, isSuccess, error } = useQuery(
    [GET_ACTIVE_KEY, params],
    () => params && getActive(params),
    {
      onSuccess: handleSuccess,
      onError: handleError,
      cacheTime: 0,
    },
  );

  return {
    getActiveData: data,
    isGetActiveLoading: isLoading,
    isGetActiveError: isError,
    isGetActiveSuccess: isSuccess,
    getActiveError: axios.isAxiosError(error) ? error : undefined,
  };
};
