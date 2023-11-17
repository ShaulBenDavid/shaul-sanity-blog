"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { userInfo } from "../auth.methods";

export const GET_INFO_KEY = "getInfo";

interface UseGetInfoProps {
  enabled?: boolean;
}

export const useGetInfo = (
  { enabled }: UseGetInfoProps = { enabled: false },
) => {
  const { data, isError, isLoading, error } = useQuery(
    [GET_INFO_KEY],
    userInfo,
    {
      enabled,
      cacheTime: 60 * 60 * 1000,
    },
  );

  return {
    info: data,
    isInfoLoading: isLoading,
    isInfoError: isError,
    infoError: axios.isAxiosError(error) ? error : undefined,
  };
};
