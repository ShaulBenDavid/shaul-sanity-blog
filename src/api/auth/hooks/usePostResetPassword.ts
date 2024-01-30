"use client";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { postResetPassword } from "../auth.methods";
import type { PostResetPasswordPayloadType } from "../auth.types";

const POST_RESET_PASSWORD_KEY = "postResetPassword";

interface UsePostResetPasswordProps {
  handleSuccess?: () => void;
  handleError?: () => void;
}

export const usePostResetPassword = ({
  handleSuccess,
  handleError,
}: UsePostResetPasswordProps) => {
  const { mutate, data, isError, isPending, isSuccess, error } = useMutation({
    mutationKey: [POST_RESET_PASSWORD_KEY],
    mutationFn: (params: PostResetPasswordPayloadType) =>
      postResetPassword(params),
    onSuccess: handleSuccess,
    onError: handleError,
  });

  return {
    postResetPassword: mutate,
    resetPasswordData: data,
    isResetPasswordLoading: isPending,
    isResetPasswordError: isError,
    isResetPasswordSuccess: isSuccess,
    resetPasswordError: axios.isAxiosError(error) ? error : undefined,
  };
};
