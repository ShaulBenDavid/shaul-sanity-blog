import React from "react";
import Login from "@/src/features/Login";
import { loginMetadata } from "@/src/metadata";

export const metadata = loginMetadata;

const LoginPage = () => (
  <section className="flex h-full w-full items-center justify-center">
    <Login />
  </section>
);

export default LoginPage;
