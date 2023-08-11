'use client';

import { useCallback } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { signUp } from '../auth.methods';
import { RegisterPayloadType } from '../auth.types';

const POST_SIGN_UP_KEY = 'postSignUp';

export const useSignUp = () => {
  const { mutate, isError, isLoading, isSuccess, error } = useMutation(
    [POST_SIGN_UP_KEY],
    (payload: RegisterPayloadType) => signUp(payload)
  );

  const handleSignUp = useCallback(
    (payload: RegisterPayloadType): void => {
      mutate(payload);
    },
    [mutate]
  );

  return {
    handleSignUp,
    isSignUpError: isError,
    isSignUpSuccess: isSuccess,
    isSignUpLoading: isLoading,
    signUpError: axios.isAxiosError(error) ? error : undefined,
  };
};
