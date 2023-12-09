import React from "react";
import { resetPasswordMetadata } from "@/src/metadata";
import { ResetPassword } from "@/src/features/Auth/ResetPassword";

export const metadata = resetPasswordMetadata;

const ResetPasswordPage = () => (
  <section className="flex h-full w-full items-center justify-center">
    <ResetPassword />
  </section>
);

export default ResetPasswordPage;
