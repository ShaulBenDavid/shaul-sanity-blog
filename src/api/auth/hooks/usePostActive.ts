"use client";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { postActive } from "../auth.methods";
import type { PostActivePayloadType } from "../auth.types";

const POST_ACTIVE_KEY = "postActive";

interface UsePostActiveProps {
  handleSuccess?: () => void;
  handleError?: () => void;
}

export const usePostActive = ({
  handleSuccess,
  handleError,
}: UsePostActiveProps) => {
  const { mutate, data, isError, isLoading, isSuccess, error } = useMutation(
    [POST_ACTIVE_KEY],
    (params: PostActivePayloadType) => postActive(params),
    {
      onSuccess: handleSuccess,
      onError: handleError,
    },
  );

  return {
    postActive: mutate,
    postActiveData: data,
    isPostActiveLoading: isLoading,
    isPostActiveError: isError,
    isPostActiveSuccess: isSuccess,
    postActiveError: axios.isAxiosError(error) ? error : undefined,
  };
};
