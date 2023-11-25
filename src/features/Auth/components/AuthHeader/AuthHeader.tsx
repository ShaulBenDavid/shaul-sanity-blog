"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

interface AuthHeaderProps {
  title: string;
  content: string;
  className?: string;
}

export const AuthHeader = ({
  title,
  content,
  className,
}: AuthHeaderProps): JSX.Element => (
  <header className={twMerge("flex flex-col gap-2", className)}>
    <h1 className="text-center text-xl font-bold">{title}</h1>
    <p className="text-center">{content}</p>
  </header>
);
