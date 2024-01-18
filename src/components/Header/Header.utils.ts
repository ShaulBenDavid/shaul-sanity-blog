import type { Routes } from "@/src/routes";
import type { NavigationLinkConfigType } from "./Header.config";
import { navigationLinksConfig } from "./Header.config";

export const getUserNavigationLinks = (
  allowedRoutes: Routes[],
): NavigationLinkConfigType[] =>
  navigationLinksConfig.filter((link) => allowedRoutes.includes(link.href));
