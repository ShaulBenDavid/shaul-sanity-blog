"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { userInfo } from "../auth.methods";

export const GET_INFO_KEY = "getInfo";

interface UseGetInfoProps {
  enabled?: boolean;
}

export const useGetInfo = ({ enabled }: UseGetInfoProps) => {
  const { data, isError, isLoading, error } = useQuery(
    [GET_INFO_KEY],
    userInfo,
    {
      enabled,
    },
  );

  return {
    info: data,
    isInfoLoading: isLoading,
    isInfoError: isError,
    infoError: axios.isAxiosError(error) ? error : undefined,
  };
};
