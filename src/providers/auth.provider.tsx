'use client';

import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import { useLogout, useRefresh } from '../api/auth/hooks';
import type { AuthResponseType } from '../api/auth';

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const { handleLogout, setAuth, isAuthInitialized } = useContext(AuthContext);

  const { logout } = useLogout({ handleSuccess: handleLogout });

  const handleSuccess = (res: AuthResponseType): void => {
    setAuth(res);
  };

  useRefresh({
    handleSuccess,
    handleLogout: logout,
    enabled: !isAuthInitialized,
  });

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
