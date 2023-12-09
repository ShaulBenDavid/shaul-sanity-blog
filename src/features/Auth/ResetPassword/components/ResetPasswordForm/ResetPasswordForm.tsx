"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { PostActivePayloadType } from "@/src/api/auth";
import Input from "@/src/components/Input";
import Button, { ButtonVariants } from "@/src/components/Button";
import { usePostResetPassword } from "@/src/api/auth/hooks";
import { ResetPasswordSchema } from "./ResetPasswordForm.utils";
import Alert, { AlertVariants } from "@/src/components/Alert";

export const ResetPasswordForm = (): JSX.Element => {
  const searchParams = useSearchParams();
  const {
    postResetPassword,
    resetPasswordData,
    isResetPasswordLoading,
    isResetPasswordError,
    isResetPasswordSuccess,
    resetPasswordError,
  } = usePostResetPassword({});

  const defaultValues = {
    email: searchParams.get("email") ?? "",
  };

  const methods = useForm<PostActivePayloadType>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues,
    mode: "onChange",
    delayError: 1000,
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

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
