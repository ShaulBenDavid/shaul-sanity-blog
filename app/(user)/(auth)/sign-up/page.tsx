import React from "react";
import { Register } from "@/src/features/Auth/Register";
import { registerMetadata } from "@/src/metadata";

export const metadata = registerMetadata;

const RegisterPage = () => {
  return (
    <section className="flex h-full w-full items-center justify-center">
      <Register />
    </section>
  );
};

export default RegisterPage;
