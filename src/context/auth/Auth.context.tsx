'use client';

import React, { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext({});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [auth, setAuth] = useState();

  const value = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
