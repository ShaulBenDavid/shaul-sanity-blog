"use client";

import { useContext, useMemo } from "react";
import { AuthContext } from "@/src/context/auth";
import type { Routes } from "@/src/routes";
import { routesByRoleConfig } from "../roles.config";

export const useGetUserRoutes = (): Routes[] => {
  const { roles } = useContext(AuthContext);

  const userRoutes = useMemo(
    () =>
      roles.reduce<Routes[]>(
        (prev, current) => [
          ...new Set<Routes>([...prev, ...routesByRoleConfig[current]]),
        ],
        [],
      ),
    [roles],
  );

  return userRoutes;
};
