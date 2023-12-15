"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Spinner } from "@/src/components/Spinner";
import { AuthLayout } from "../components/AuthLayout";
import { AuthHeader } from "../components/AuthHeader";

const ResetPasswordForm = dynamic(
  () => import("./ResetPasswordForm").then((mod) => mod.ResetPasswordForm),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
    ),
  },
);

export const ResetPassword = (): JSX.Element => (
  <AuthLayout className="h-fit gap-4">
    <>
      <AuthHeader
        title="Password Reset Request"
        content="You have requested a password reset for your account. Please follow the instructions below to reset your password."
      />
      <ResetPasswordForm />
    </>
  </AuthLayout>
);
