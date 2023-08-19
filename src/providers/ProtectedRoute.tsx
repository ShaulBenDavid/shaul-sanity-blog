'use client';

import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/src/context/auth';
import { hasMatchingRole } from '../roles/roles.utils';
import { Roles } from '../roles';
import { Routes } from '../routes';

interface ProtectedRouteProps {
  allowedRoles: Roles[];
  defaultRoute?: Routes;
  children: React.ReactNode;
}

const ProtectedRoute = ({
  allowedRoles,
  defaultRoute = Routes.SIGN_IN,
  children,
}: ProtectedRouteProps): JSX.Element | null => {
  const { roles, isAuth } = useContext(AuthContext);
  const router = useRouter();

  const isAllowed = hasMatchingRole(allowedRoles, roles);

  useEffect(() => {
    if (!isAllowed && isAuth) {
      router.push(defaultRoute);
    }
  }, [router, roles, isAuth, isAllowed, defaultRoute]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isAllowed ? <>{children}</> : <></>;
};

export default ProtectedRoute;
