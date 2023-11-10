import React from "react";
import ProtectedRoute from "@/src/providers/ProtectedRoute";
import { Routes } from "@/src/routes";
import { Roles } from "@/src/roles";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <ProtectedRoute allowedRoles={[Roles.VISITOR]} defaultRoute={Routes.ROOT}>
    {children}
  </ProtectedRoute>
);

export default Layout;
