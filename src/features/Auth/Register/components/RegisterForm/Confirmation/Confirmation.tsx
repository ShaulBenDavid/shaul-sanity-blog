"use client";

import React, { type FormEvent } from "react";
import Link from "next/link";
import { Routes } from "@/src/routes";
import { Button, ButtonVariants } from "@/src/components/Button";
import { EmailAnimation } from "./EmailAnimation";

interface ConfirmationProps {
  isLoading: boolean;
  onSubmit: (e: FormEvent) => void;
}

export const Confirmation = ({
  isLoading,
  onSubmit,
}: ConfirmationProps): JSX.Element => (
  <>
    <EmailAnimation />
    <header className="mt-12 flex justify-center text-center sm:mt-8">
      <h1 className="text-xl font-semibold sm:max-w-[75%]">
        Congratulations! Your account has been successfully created.
      </h1>
    </header>
    <section className="mt-2 flex h-full flex-col items-center text-center">
      <p className="sm:max-w-[75%]">
        Please check your email for a confirmation message. You will need to
        confirm your email address before you can access your account.
      </p>
      <Link className="button-link mt-auto text-base" href={Routes.SIGN_IN}>
        go to login page
      </Link>
      <form onSubmit={onSubmit}>
        <label htmlFor="hiddenEmail" className="sr-only">
          Email:
          <input
            type="email"
            id="hiddenEmail"
            name="email"
            aria-hidden
            className="hidden"
          />
        </label>
        <span className="sr-only">Resend Activation for your account</span>
        <Button
          variant={ButtonVariants.LINK}
          type="submit"
          isLoading={isLoading}
        >
          resend email
        </Button>
      </form>
    </section>
  </>
);
