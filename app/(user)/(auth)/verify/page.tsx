import React from "react";
import { verifyMetadata } from "@/src/metadata";
import { Verify } from "@/src/features/Auth/Verify";

export const metadata = verifyMetadata;

const VerifyPage = () => (
  <section className="flex h-full w-full items-center justify-center">
    <Verify />
  </section>
);

export default VerifyPage;
