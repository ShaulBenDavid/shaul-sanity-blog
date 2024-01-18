import React, { type ReactNode } from "react";
import Link, { type LinkProps } from "next/link";
import type { ButtonLinkVariants } from "./ButtonLink.types";
import { linkStyleConfig } from "./ButtonLink.config";

interface ButtonLinkProps extends LinkProps {
  variant: ButtonLinkVariants;
  width?: string;
  children: ReactNode;
}

export const ButtonLink = ({
  variant,
  width,
  children,
  ...props
}: ButtonLinkProps): JSX.Element => (
  <Link
    {...props}
    className={`flex h-[35px] w-full flex-row content-center items-center justify-center rounded-md text-base capitalize ${linkStyleConfig[variant]}`}
    style={{ width }}
  >
    {children}
  </Link>
);
