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

export const usePostActive = ({
  handleSuccess,
  handleError,
}: UsePostResetPasswordProps) => {
  const { mutate, data, isError, isLoading, isSuccess, error } = useMutation(
    [POST_RESET_PASSWORD_KEY],
    (params: PostResetPasswordPayloadType) => postResetPassword(params),
    {
      onSuccess: handleSuccess,
      onError: handleError,
    },
  );

  return {
    postResetPassword: mutate,
    resetPasswordData: data,
    isResetPasswordLoading: isLoading,
    isResetPasswordError: isError,
    isResetPasswordSuccess: isSuccess,
    resetPasswordError: axios.isAxiosError(error) ? error : undefined,
  };
};
