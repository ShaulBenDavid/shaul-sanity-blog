import React from 'react';
import Link from 'next/link';
import { Routes } from '@/src/routes';

const LoginFooter = (): JSX.Element => (
  <div className="flex flex-col justify-center gap-4">
    <Link
      href={Routes.RESET_PASSWORD}
      className="text-center text-primary-900 hover:underline"
    >
      I forgot my password
    </Link>
    <span className="text-center text-sm">
      Don&apos;t have an account?{' '}
      <Link
        href={Routes.SIGN_UP}
        className="text-center text-primary-900 hover:underline"
      >
        register
      </Link>
    </span>
  </div>
);

export default LoginFooter;
