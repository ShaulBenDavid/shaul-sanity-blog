import { Roles } from '@/src/roles';

export type LoginResponseType = {
  firstName: string;
  lastName: string;
  email: string;
  role: Roles[];
  username: string;
  accessToken: string;
};

export type Auth = LoginResponseType | null | undefined;

export type LoginPayloadType = {
  email: string;
  password: string;
};
