'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '@/src/api/auth/hooks';
import Input from '@/src/components/Input';
import Button, { ButtonVariants } from '@/src/components/Button';
import { loginFormConfig } from './LoginForm.config';
import { LoginPayloadType, LoginResponseType } from '@/src/api/auth';
import { LoginSchema } from './LoginForm.utils';

const LoginForm = (): JSX.Element => {
  const methods = useForm<LoginPayloadType>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
    delayError: 1000,
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const handleSuccess = (res: LoginResponseType): void => {
    console.log('res =', res);
  };

  const { isLoginLoading, handleLogin } = useLogin({ handleSuccess });

  const onSubmit = handleSubmit((value): void => {
    handleLogin(value);
  });

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col" onSubmit={onSubmit}>
        {loginFormConfig.map(({ label, idFor, type }) => (
          <Input
            key={idFor}
            label={label}
            idFor={idFor}
            type={type}
            className="mb-4"
          />
        ))}
        <Button
          variant={ButtonVariants.PRIMARY}
          type="submit"
          className="mt-2"
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
