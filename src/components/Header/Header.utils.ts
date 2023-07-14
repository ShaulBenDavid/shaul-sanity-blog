import { Routes } from '@/src/routes';
import {
  NavigationLinksConfigType,
  navigationLinksConfig,
} from './Header.config';

export const getUserNavigationLinks = (
  allowedRoutes: Routes[]
): NavigationLinksConfigType[] =>
  navigationLinksConfig.filter((link) => allowedRoutes.includes(link.href));
