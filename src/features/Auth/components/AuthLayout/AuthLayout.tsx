"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

interface AuthLayoutProps {
  className?: string;
  children: JSX.Element;
}

export const AuthLayout = ({
  className,
  children,
}: AuthLayoutProps): JSX.Element => (
  <div
    className={twMerge(
      `my-8 flex h-[608px] w-[612px] flex-col rounded-md p-4 shadow-container max-tb:max-w-[612px] max-sm:h-[700px] sm:p-8`,
      className,
    )}
  >
    {children}
  </div>
);
