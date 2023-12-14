"use client";

import type { PropsWithChildren } from "react";
import React from "react";
import Link from "next/link";
import type { Routes } from "@/src/routes";
import { AppLinkStyles } from "./AppLink.config";

type AppLinkProps =
  | {
      href?: never;
      onClick: () => void;
    }
  | {
      href: string | Routes;
      onClick?: never;
    };

export const AppLink = ({
  href,
  onClick,
  children,
}: PropsWithChildren<AppLinkProps>): JSX.Element =>
  href ? (
    <Link href={href} className={AppLinkStyles}>
      {children}
    </Link>
  ) : (
    <button type="button" onClick={onClick} className={AppLinkStyles}>
      {children}
    </button>
  );
