import type { Roles } from "@/src/roles";
import type { Interested } from "../auth";
import type { MessageResponseType } from "../api.types";

export type PostUserImagePayloadType = FormData;

export type PostUserImageResponseType = MessageResponseType;

export enum UserDetailsEnum {
  WEBSITE = "website",
  JOB = "job",
  EDUCATION = "education",
  GITHUB = "github",
  JOIN_DATE = "joinDate",
  ABOUT = "about",
  SKILLS = "skills",
}

export type UserDetailsType = {
  type: UserDetailsEnum;
  value?: string | null | undefined;
  _id: string;
};

export type GetUserProfileResponseType = {
  firstName: string;
  lastName: string;
  title: string | null;
  email: string;
  roles: Roles[];
  interested: Interested[] | null;
  username: string;
  details: UserDetailsType[];
};
