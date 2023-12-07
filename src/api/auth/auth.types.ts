import type { Roles } from "@/src/roles";
import type { MessageResponseType } from "../api.types";

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

export type PostActivePayloadType = {
  email: string;
};

export type PostActiveResponseType = MessageResponseType;

export type GetActiveParamsType = {
  token: string;
};

export type GetActiveResponseType = MessageResponseType;

export type PostResetPasswordResponseType = MessageResponseType;

export type PostResetPasswordPayloadType = {
  email: string;
};
