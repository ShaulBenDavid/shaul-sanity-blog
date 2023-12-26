"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../user.methods";

const GET_USER_PROFILE_KEY = "getUserProfile";

interface UseGetUserInfoProps {
  username: string;
}

export const useGetUserProfile = ({ username }: UseGetUserInfoProps) => {
  const { data, isError, isLoading, error } = useQuery(
    [GET_USER_PROFILE_KEY, username],
    () => getUserProfile(username),
    {
      cacheTime: 60 * 60 * 1000,
    },
  );

  return {
    userInfo: data,
    isUserInfoLoading: isLoading,
    isUserInfoError: isError,
    userInfoError: axios.isAxiosError(error) ? error : undefined,
  };
};
