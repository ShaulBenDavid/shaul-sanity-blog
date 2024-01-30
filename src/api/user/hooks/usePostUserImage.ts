"use client";

import { useCallback } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { postUserImage } from "../user.methods";
import type { PostUserImagePayloadType } from "../user.types";

const POST_USER_IMAGE_KEY = "postUserImage";

export const usePostUserImage = () => {
  const { mutate, isError, isPending, isSuccess, error } = useMutation({
    mutationKey: [POST_USER_IMAGE_KEY],
    mutationFn: (payload: PostUserImagePayloadType) => postUserImage(payload),
  });

  const handlePostImage = useCallback(
    (payload: File): void => {
      const formData = new FormData();
      formData.append("image", payload);
      mutate(formData);
    },
    [mutate],
  );

  return {
    handlePostImage,
    isUserImageError: isError,
    isUserImageSuccess: isSuccess,
    isUserImageLoading: isPending,
    userImageError: axios.isAxiosError(error) ? error : undefined,
  };
};
