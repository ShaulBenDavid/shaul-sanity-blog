import type { Roles } from "@/src/roles";

export type Interested = {
  topic: string;
  sanityId: string;
  slug: string;
  _id: string;
};

export type AuthResponseType = {
  roles: Roles[];
  accessToken: string;
};
export type UserInfoResponseType = {
  firstName: string;
  lastName: string;
  title: string | null;
  email: string;
  roles: Roles[];
  interested: Interested[] | null;
  username: string;
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
