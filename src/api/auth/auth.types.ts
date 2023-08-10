import { Roles } from '@/src/roles';

export type AuthResponseType = {
  firstName: string;
  lastName: string;
  email: string;
  role: Roles[];
  username: string;
  accessToken: string;
};

export type Auth = AuthResponseType | null | undefined;

export type LoginPayloadType = {
  email: string;
  password: string;
};

export type RegisterPayloadType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
