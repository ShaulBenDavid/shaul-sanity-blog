"use client";

import React from "react";
import dynamic from "next/dynamic";
import Spinner from "@/src/components/Spinner";
import { AuthLayout } from "../components/AuthLayout";
import { AuthHeader } from "../components/AuthHeader";

const VerifyForm = dynamic(
  () => import("./VerifyForm").then((mod) => mod.VerifyForm),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
    ),
  },
);

export const Verify = (): JSX.Element => (
  <AuthLayout className="h-fit gap-4">
    <>
      <AuthHeader
        title="Verify your email"
        content="Please verify your email address to complete the registration process."
      />
      <VerifyForm />
    </>
  </AuthLayout>
);
