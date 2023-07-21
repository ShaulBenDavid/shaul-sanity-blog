'use client';

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Auth } from '@/src/api/auth';
import { Roles } from '@/src/roles';
import { appQueryClient } from '@/src/queries';

type AuthContextObj = {
  auth: Auth | null | undefined;
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
  const [auth, setAuth] = useState<Auth | null | undefined>();

  const handleLogout = useCallback((): void => {
    appQueryClient.clear();
    setAuth(null);
  }, [auth]);

  const userRoles = (): Roles[] => {
    if (auth?.role) {
      return auth.role;
    }

    if (auth === undefined) {
      return [Roles.USER];
    }

    return [Roles.VISITOR];
  };

  const value = useMemo(
    (): AuthContextObj => ({
      auth,
      isAuth: !!auth?.accessToken,
      isAuthInitialized: auth !== undefined,
      roles: userRoles(),
      setAuth,
      handleLogout,
    }),
    [auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
