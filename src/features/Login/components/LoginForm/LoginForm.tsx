'use client';

import React, { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthContext } from '@/src/context/auth';
import { useLogin } from '@/src/api/auth/hooks';
import Input from '@/src/components/Input';
import Button, { ButtonVariants } from '@/src/components/Button';
import { loginFormConfig } from './LoginForm.config';
import type { LoginPayloadType, AuthResponseType } from '@/src/api/auth';
import Alert, { AlertVariants } from '@/src/components/Alert';
import { LoginSchema } from './LoginForm.utils';

const LoginForm = (): JSX.Element => {
  const { setAuth } = useContext(AuthContext);
  const methods = useForm<LoginPayloadType>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
    delayError: 1000,
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const handleSuccess = (res: AuthResponseType): void => {
    setAuth(res);
  };

  const { isLoginLoading, handleLogin, isLoginError, loginError } = useLogin({
    handleSuccess,
  });

  const onSubmit = handleSubmit((value): void => {
    handleLogin(value);
  });

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col" onSubmit={onSubmit}>
        {isLoginError && (
          <Alert
            variant={AlertVariants.DANGER}
            content={loginError?.response?.data.message}
            className="mb-4"
          />
        )}
        {loginFormConfig.map(({ label, idFor, placeholder, type }) => (
          <Input
            key={idFor}
            label={label}
            idFor={idFor}
            type={type}
            placeholder={placeholder}
            className="mb-4"
          />
        ))}
        <Button
          variant={ButtonVariants.PRIMARY}
          type="submit"
          className="mt-2 max-mb:mt-4"
          isLoading={isLoginLoading}
          disabled={!isValid}
        >
          continue
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
