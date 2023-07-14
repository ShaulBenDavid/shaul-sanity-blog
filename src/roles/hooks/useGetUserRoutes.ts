'use client';

import { useContext, useMemo } from 'react';
import { AuthContext } from '@/src/context/auth';
import { Routes } from '@/src/routes';
import { getRoutesByRole } from '../roles.config';

export const useGetUserRoutes = (): Routes[] => {
  const { roles } = useContext(AuthContext);

  const userRoutes = useMemo(
    () =>
      roles.reduce<Routes[]>(
        (prev, current) => [
          ...new Set<Routes>([...prev, ...getRoutesByRole[current]]),
        ],
        []
      ),
    [roles]
  );

  return userRoutes;
};
