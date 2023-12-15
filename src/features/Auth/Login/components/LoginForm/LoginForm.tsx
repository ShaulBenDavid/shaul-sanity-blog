"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "@/src/context/auth";
import { useLogin } from "@/src/api/auth/hooks";
import { Input } from "@/src/components/Input";
import { Routes } from "@/src/routes";
import { Button, ButtonVariants } from "@/src/components/Button";
import type { LoginPayloadType, AuthResponseType } from "@/src/api/auth";
import { HttpStatusCode } from "@/src/types";
import { Alert, AlertVariants } from "@/src/components/Alert";
import { loginFormConfig } from "./LoginForm.config";
import { LoginSchema } from "./LoginForm.utils";

export const LoginForm = (): JSX.Element => {
  const { setAuth } = useContext(AuthContext);
  const methods = useForm<LoginPayloadType>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
    delayError: 1000,
  });

  const {
    handleSubmit,
    getValues,
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
      {loginError?.response?.status === HttpStatusCode.FORBIDDEN && (
        <Link
          href={`${Routes.VERIFY}?email=${getValues("email")}`}
          className="app-link"
        >
          Verify your email
        </Link>
      )}
    </FormProvider>
  );
};
