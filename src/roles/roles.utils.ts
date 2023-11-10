import type { Roles } from "./roles.types";

export const hasMatchingRole = (
  allowedRoles: Roles[],
  userRoles: Roles[],
): boolean => {
  return allowedRoles.some((role) => userRoles.includes(role));
};
