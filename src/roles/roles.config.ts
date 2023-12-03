import { Routes } from "../routes";
import { userRoutes, visitorRoutes } from "../routes/routes.config";
import { Roles } from "./roles.types";

export const routesByRoleConfig: Record<Roles, Routes[]> = {
  [Roles.VISITOR]: visitorRoutes,
  [Roles.USER]: userRoutes,
  [Roles.ADMIN]: userRoutes,
  [Roles.WRITE]: Object.values(Routes),
};
