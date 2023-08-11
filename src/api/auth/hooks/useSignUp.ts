'use client';

import { useCallback } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { login } from '../auth.methods';
import { AuthResponseType, RegisterPayloadType } from '../auth.types';

const POST_SIGN_UP_KEY = 'postSignUp';

interface UseSignUpProps {
  handleSuccess: (res: AuthResponseType) => void;
}

export const useSignUp = ({ handleSuccess }: UseSignUpProps) => {
  const { mutate, isError, isLoading, error } = useMutation(
    [POST_SIGN_UP_KEY],
    (payload: RegisterPayloadType) => login(payload),
    {
      onSuccess: (res) => handleSuccess(res),
    }
  );

  const handleSignUp = useCallback(
    (payload: RegisterPayloadType): void => {
      mutate(payload);
    },
    [mutate]
  );

  return {
    handleSignUp,
    isSignUpLoading: isLoading,
    isSignUpError: isError,
    signUpError: axios.isAxiosError(error) ? error : undefined,
  };
};
