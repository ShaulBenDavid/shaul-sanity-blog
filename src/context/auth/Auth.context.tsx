'use client';

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';
import { Auth } from '@/src/api/auth';

type AuthContextObj = {
  auth: Auth | null | undefined;
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
      setAuth,
    }),
    [auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
