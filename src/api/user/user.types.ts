import type { Roles } from "@/src/roles";
import type { Interested } from "../auth";
import type { MessageResponseType } from "../api.types";

export type PostUserImagePayloadType = FormData;

export type PostUserImageResponseType = MessageResponseType;

export type GetUserProfileResponseType = {
  firstName: string;
  lastName: string;
  title: string | null;
  email: string;
  roles: Roles[];
  interested: Interested[] | null;
  username: string;
};
