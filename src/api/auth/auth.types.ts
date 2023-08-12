import { Roles } from '@/src/roles';

export type Interested = {
  topic: string;
  sanityId: string;
  slug: string;
  _id: string;
};

export type AuthResponseType = {
  firstName: string;
  lastName: string;
  email: string;
  role: Roles[];
  interested: Interested[] | null;
  username: string;
  accessToken: string;
};

export type LoginPayloadType = {
  email: string;
  password: string;
};

export type RegisterPayloadType = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
};

export type RegisterResponseType = {
  message: string;
  userId: string;
};
