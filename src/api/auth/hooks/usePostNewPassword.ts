"use client";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { postNewPassword } from "../auth.methods";
import type { PostNewPasswordPayloadType } from "../auth.types";

const POST_NEW_PASSWORD_KEY = "postNewPassword";

interface UsePostNewPasswordProps {
  handleSuccess?: () => void;
  handleError?: () => void;
  token: string;
}

export const usePostNewPassword = ({
  handleSuccess,
  handleError,
  token,
}: UsePostNewPasswordProps) => {
  const { mutate, data, isError, isPending, isSuccess, error } = useMutation({
    mutationKey: [POST_NEW_PASSWORD_KEY, token],
    mutationFn: (params: PostNewPasswordPayloadType) =>
      postNewPassword(params, token),
    onSuccess: handleSuccess,
    onError: handleError,
  });

  return {
    postNewPassword: mutate,
    newPasswordData: data,
    isNewPasswordLoading: isPending,
    isNewPasswordError: isError,
    isNewPasswordSuccess: isSuccess,
    newPasswordError: axios.isAxiosError(error) ? error : undefined,
  };
};
