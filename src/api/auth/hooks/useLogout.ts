"use client";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../auth.methods";

const DELETE_LOGOUT_KEY = "deleteLogout";

interface UseLogoutProps {
  handleSuccess: () => void;
}

export const useLogout = ({ handleSuccess }: UseLogoutProps) => {
  const { mutate, isError, isPending, error } = useMutation({
    mutationKey: [DELETE_LOGOUT_KEY],
    mutationFn: logout,
    onSuccess: () => handleSuccess(),
    onError: () => handleSuccess(),
  });

  return {
    logout: mutate,
    isLogoutLoading: isPending,
    isLogoutError: isError,
    loginError: axios.isAxiosError(error) ? error : undefined,
  };
};
