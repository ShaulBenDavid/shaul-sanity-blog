import React, { type ReactNode } from "react";
import Link, { type LinkProps } from "next/link";
import type { ButtonLinkVariants } from "./ButtonLink.types";
import { linkStyleConfig } from "./ButtonLink.config";

interface ButtonLinkProps extends LinkProps {
  variant: ButtonLinkVariants;
  width?: string;
  ariaLabel?: string;
  isAriaCurrent?: boolean;
  children: ReactNode;
}

export const ButtonLink = ({
  variant,
  width,
  children,
  ariaLabel,
  isAriaCurrent = false,
  ...props
}: ButtonLinkProps): JSX.Element => (
  <Link
    {...props}
    className={`flex h-[35px] w-full flex-row content-center items-center justify-center whitespace-nowrap rounded-md px-5 text-base capitalize ${linkStyleConfig[variant]}`}
    style={{ width }}
    aria-label={ariaLabel}
    aria-current={isAriaCurrent ? "page" : undefined}
  >
    {children}
  </Link>
);
