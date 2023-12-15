"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { PostResetPasswordPayloadType } from "@/src/api/auth";
import { Input } from "@/src/components/Input";
import { Button, ButtonVariants } from "@/src/components/Button";
import { usePostResetPassword } from "@/src/api/auth/hooks";
import { Alert, AlertVariants } from "@/src/components/Alert";
import { ResetPasswordSchema } from "./ResetPasswordForm.utils";

export const ResetPasswordForm = (): JSX.Element => {
  const methods = useForm<PostResetPasswordPayloadType>({
    resolver: zodResolver(ResetPasswordSchema),
    mode: "onChange",
    delayError: 1000,
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = methods;

  const handleSuccess = (): void => {
    reset({ email: "" });
  };

  const {
    postResetPassword,
    resetPasswordData,
    isResetPasswordLoading,
    isResetPasswordError,
    isResetPasswordSuccess,
    resetPasswordError,
  } = usePostResetPassword({ handleSuccess });

  const onSubmit = handleSubmit((value): void => {
    postResetPassword(value);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        {isResetPasswordError && (
          <Alert
            variant={AlertVariants.DANGER}
            content={
              resetPasswordError?.response?.data.message ??
              resetPasswordError?.message
            }
            className="mb-4"
          />
        )}
        {isResetPasswordSuccess && (
          <Alert
            variant={AlertVariants.SUCCESS}
            content={resetPasswordData?.message ?? ""}
            className="mb-4"
          />
        )}
        <Input
          label="email"
          idFor="email"
          type="email"
          placeholder="example@example.com...."
          className="mb-4"
          autoComplete="email"
        />
        <Button
          variant={ButtonVariants.PRIMARY}
          type="submit"
          className="mt-2 max-mb:mt-4"
          isLoading={isResetPasswordLoading}
          disabled={!isValid}
        >
          send reset link
        </Button>
      </form>
    </FormProvider>
  );
};
