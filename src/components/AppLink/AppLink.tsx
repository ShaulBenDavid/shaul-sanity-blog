'use client';

import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { Routes } from '@/src/routes';
import { AppLinkStyles } from './AppLink.config';

type AppLinkProps =
  | {
      href?: never;
      onClick: () => void;
    }
  | {
      href: string | Routes;
      onClick?: never;
    };

const AppLink = ({
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

export default AppLink;
