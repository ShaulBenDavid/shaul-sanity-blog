'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '@/src/api/auth/hooks';
import Input from '@/src/components/Input';
import Button, { ButtonVariants } from '@/src/components/Button';
import { loginFormConfig } from './LoginForm.config';
import { LoginParamsType, LoginResponseType } from '@/src/api/auth';
import { LoginSchema } from './LoginForm.utils';

const LoginForm = (): JSX.Element => {
  const methods = useForm<LoginParamsType>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
    delayError: 1000,
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const handleSuccess = (res: LoginResponseType) => {
    console.log('res =', res);
  };

  const { isLoginLoading } = useLogin({ handleSuccess });

  const onSubmit = handleSubmit((value) => {
    console.log('value =', value);
  });

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col" onSubmit={onSubmit}>
        {loginFormConfig.map(({ label, idFor }) => (
          <Input label={label} idFor={idFor} className="mb-4" key={idFor} />
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
