"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/src/components/Input";
import { Button, ButtonVariants } from "@/src/components/Button";
import { usePostNewPassword } from "@/src/api/auth/hooks";
import { Alert, AlertVariants } from "@/src/components/Alert";
import { NewPasswordSchema } from "./NewPasswordForm.utils";
import type { NewPasswordFormPayloadType } from "./NewPasswordForm.types";

interface NewPasswordFormProps {
  token: string;
}

export const NewPasswordForm = ({
  token,
}: NewPasswordFormProps): JSX.Element => {
  const methods = useForm<NewPasswordFormPayloadType>({
    resolver: zodResolver(NewPasswordSchema),
    mode: "onChange",
    delayError: 1000,
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = methods;

  const handleSuccess = (): void => {
    reset({
      password: "",
      confirmPassword: "",
    });
  };

  const {
    postNewPassword,
    newPasswordData,
    isNewPasswordLoading,
    isNewPasswordError,
    isNewPasswordSuccess,
    newPasswordError,
  } = usePostNewPassword({ token, handleSuccess });

  const onSubmit = handleSubmit((value): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...payload } = value;

    postNewPassword(payload);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="w-full">
        {isNewPasswordError && (
          <Alert
            variant={AlertVariants.DANGER}
            content={
              newPasswordError?.response?.data.message ??
              newPasswordError?.message
            }
            className="mb-4"
          />
        )}
        {isNewPasswordSuccess && (
          <Alert
            variant={AlertVariants.SUCCESS}
            content={newPasswordData?.message ?? ""}
            className="mb-4"
          />
        )}
        <Input
          label="password"
          idFor="password"
          type="password"
          placeholder="Choose strong password!"
          className="mb-4"
          autoComplete="password"
        />
        <Input
          label="confirmPassword"
          idFor="confirmPassword"
          type="password"
          placeholder="Confirm password."
          className="mb-4"
          autoComplete="password"
        />
        <Button
          variant={ButtonVariants.PRIMARY}
          type="submit"
          className="mt-2 max-mb:mt-4"
          isLoading={isNewPasswordLoading}
          disabled={!isValid}
        >
          set new password
        </Button>
      </form>
    </FormProvider>
  );
};
