import type { Roles } from "./roles.types";

export const hasMatchingRole = (
  allowedRoles: Roles[],
  userRoles: Roles[],
): boolean => allowedRoles.some((role) => userRoles.includes(role));
