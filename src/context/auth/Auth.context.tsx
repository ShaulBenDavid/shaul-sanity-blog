'use client';

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { AuthResponseType } from '@/src/api/auth';
import { Roles } from '@/src/roles';
import { appQueryClient } from '@/src/queries';

export type Auth = AuthResponseType | null | undefined;

type AuthContextObj = {
  auth: Auth;
  isAuth: boolean;
  isAuthInitialized: boolean;
  roles: Roles[];
  setAuth: Dispatch<SetStateAction<Auth>>;
  handleLogout: () => void;
};

export const AuthContext = createContext({} as AuthContextObj);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [auth, setAuth] = useState<Auth>();

  const handleLogout = useCallback((): void => {
    appQueryClient.clear();
    setAuth(null);
  }, []);

  const userRoles = useCallback((): Roles[] => {
    if (auth?.role) {
      return auth.role;
    }

    if (auth === undefined) {
      return [Roles.USER];
    }

    return [Roles.VISITOR];
  }, [auth]);

  const value = useMemo(
    (): AuthContextObj => ({
      auth,
      isAuth: !!auth?.accessToken,
      isAuthInitialized: auth !== undefined,
      roles: userRoles(),
      setAuth,
      handleLogout,
    }),
    [auth, handleLogout, userRoles]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
