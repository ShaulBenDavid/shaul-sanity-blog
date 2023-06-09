import React from 'react';
import Link from 'next/link';
import { Routes } from '@/src/routes';

const LoginFooter = (): JSX.Element => (
  <div className="flex flex-col justify-center gap-4">
    <Link
      href={Routes.RESET_PASSWORD}
      className="text-center text-primary hover:underline"
    >
      I forgot my password
    </Link>
    <span className="text-center text-sm">
      Don&apos;t have an account?{' '}
      <Link
        href={Routes.REGISTER}
        className="text-center text-primary hover:underline"
      >
        register
      </Link>
    </span>
  </div>
);

export default LoginFooter;
