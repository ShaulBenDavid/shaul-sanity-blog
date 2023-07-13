import { Routes } from '../routes';
import { Roles } from './roles.types';

export const routesByRole = {
  [Roles.VISITOR]: Object.values(Routes),
  [Roles.USER]: Object.values(Routes),
  [Roles.ADMIN]: Object.values(Routes),
  [Roles.WRITE]: Object.values(Routes),
};
