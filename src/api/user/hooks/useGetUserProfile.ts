"use client";

import ms from "ms";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../user.methods";

const GET_USER_PROFILE_KEY = "getUserProfile";

interface UseGetUserInfoProps {
  username: string;
}

export const useGetUserProfile = ({ username }: UseGetUserInfoProps) => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: [GET_USER_PROFILE_KEY, username],
    queryFn: () => getUserProfile(username),
    gcTime: ms("2h"),
  });

  return {
    userInfo: data,
    isUserInfoLoading: isLoading,
    isUserInfoError: isError,
    userInfoError: axios.isAxiosError(error) ? error : undefined,
  };
};
