'use client';

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';
import { Auth } from '@/src/api/auth';
import { Roles } from '@/src/roles';

type AuthContextObj = {
  auth: Auth | null | undefined;
  isAuth: boolean;
  roles: Roles[];
  setAuth: Dispatch<SetStateAction<Auth>>;
};

export const AuthContext = createContext({} as AuthContextObj);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [auth, setAuth] = useState<Auth | null | undefined>();

  const value = useMemo(
    (): AuthContextObj => ({
      auth,
      isAuth: !!auth?.accessToken,
      roles: auth?.role ?? [Roles.VISITOR],
      setAuth,
    }),
    [auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
