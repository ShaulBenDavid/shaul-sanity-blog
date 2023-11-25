"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { PostActivePayloadType } from "@/src/api/auth";
import Input from "@/src/components/Input";
import Button, { ButtonVariants } from "@/src/components/Button";
import { usePostActive } from "@/src/api/auth/hooks";
import { VerifySchema } from "./VerifyForm.utils";
import Alert, { AlertVariants } from "@/src/components/Alert";

export const VerifyForm = (): JSX.Element => {
  const searchParams = useSearchParams();
  const {
    postActive,
    postActiveData,
    isPostActiveLoading,
    isPostActiveError,
    isPostActiveSuccess,
    postActiveError,
  } = usePostActive({});

  const defaultValues = {
    email: searchParams.get("email") ?? "",
  };

  const methods = useForm<PostActivePayloadType>({
    resolver: zodResolver(VerifySchema),
    defaultValues,
    mode: "onChange",
    delayError: 1000,
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = handleSubmit((value): void => {
    postActive(value);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        {isPostActiveError && (
          <Alert
            variant={AlertVariants.DANGER}
            content={postActiveError?.response?.data.message}
            className="mb-4"
          />
        )}
        {isPostActiveSuccess && (
          <Alert
            variant={AlertVariants.SUCCESS}
            content={postActiveData?.message ?? ""}
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
          isLoading={isPostActiveLoading}
          disabled={!isValid}
        >
          send verification
        </Button>
      </form>
    </FormProvider>
  );
};
