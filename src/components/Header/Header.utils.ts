import type { Routes } from "@/src/routes";
import type { NavigationLinksConfigType } from "./Header.config";
import { navigationLinksConfig } from "./Header.config";

export const getUserNavigationLinks = (
  allowedRoutes: Routes[],
): NavigationLinksConfigType[] =>
  navigationLinksConfig.filter((link) => allowedRoutes.includes(link.href));
