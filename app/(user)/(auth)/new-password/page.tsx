import React from "react";
import { newPasswordMetadata } from "@/src/metadata";
import { NewPassword } from "@/src/features/Auth/NewPassword";

export const metadata = newPasswordMetadata;

const NewPasswordPage = () => (
  <section className="flex h-full w-full items-center justify-center">
    <NewPassword />
  </section>
);

export default NewPasswordPage;
