import React from "react";
import { AuthLayout } from "../components/AuthLayout";
import { AuthHeader } from "../components/AuthHeader";

export const Verify = (): JSX.Element => (
  <AuthLayout>
    <AuthHeader
      title="Verify your email"
      content="Please verify your email address to complete the registration process."
    />
  </AuthLayout>
);
