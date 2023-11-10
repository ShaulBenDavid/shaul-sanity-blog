"use client";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../auth.methods";

const DELETE_LOGOUT_KEY = "deleteLogout";

interface UseLogoutProps {
  handleSuccess: () => void;
}

export const useLogout = ({ handleSuccess }: UseLogoutProps) => {
  const { mutate, isError, isLoading, error } = useMutation(
    [DELETE_LOGOUT_KEY],
    logout,
    {
      onSuccess: () => handleSuccess(),
      onError: () => handleSuccess(),
    },
  );

  return {
    logout: mutate,
    isLogoutLoading: isLoading,
    isLogoutError: isError,
    loginError: axios.isAxiosError(error) ? error : undefined,
  };
};
