'use client';

import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { login } from '../auth.methods';
import { LoginParamsType, LoginResponseType } from '../auth.types';

const POST_LOGIN_KEY = 'postLogin';

interface UseLoginProps {
  handleSuccess: (res: LoginResponseType) => void;
}

export const useLogin = ({ handleSuccess }: UseLoginProps) => {
  const { mutate, isError, isLoading } = useMutation(
    [POST_LOGIN_KEY],
    (params: LoginParamsType) => login(params),
    {
      onSuccess: (res) => handleSuccess(res),
    }
  );

  const handleLogin = useCallback(
    (params: LoginParamsType) => {
      mutate(params);
    },
    [mutate]
  );

  return {
    handleLogin,
    isLoginLoading: isLoading,
    isLoginError: isError,
  };
};
