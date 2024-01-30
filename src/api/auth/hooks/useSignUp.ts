"use client";

import { useCallback } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../auth.methods";
import type { RegisterPayloadType } from "../auth.types";

const POST_SIGN_UP_KEY = "postSignUp";

export const useSignUp = () => {
  const { mutate, isError, isPending, isSuccess, error } = useMutation({
    mutationKey: [POST_SIGN_UP_KEY],
    mutationFn: (payload: RegisterPayloadType) => signUp(payload),
  });

  const handleSignUp = useCallback(
    (payload: RegisterPayloadType): void => {
      mutate(payload);
    },
    [mutate],
  );

  return {
    handleSignUp,
    isSignUpError: isError,
    isSignUpSuccess: isSuccess,
    isSignUpLoading: isPending,
    signUpError: axios.isAxiosError(error) ? error : undefined,
  };
};
