"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import Spinner from "@/src/components/Spinner";
import { AuthLayout } from "../components/AuthLayout";
import { AuthHeader } from "../components/AuthHeader";
import { ErrorMessage } from "./components/ErrorMessage";

const NewPasswordForm = dynamic(
  () =>
    import("./components/NewPasswordForm").then((mod) => mod.NewPasswordForm),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
    ),
  },
);

const TOKEN_QUERY_PARAMS = "token";

export const NewPassword = (): JSX.Element => {
  const searchParams = useSearchParams();
  const token = searchParams.get(TOKEN_QUERY_PARAMS);

  return token ? (
    <AuthLayout className="flex h-fit items-center gap-4">
      <>
        <AuthHeader
          title="Set New Password"
          content="Set a new password on dwizard. Create a secure password to protect your account on our programming blog."
        />
        <NewPasswordForm token={token} />
      </>
    </AuthLayout>
  ) : (
    <ErrorMessage />
  );
};
