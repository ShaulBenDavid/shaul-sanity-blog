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
  LOCATION = "location",
}

export type UserDetailsType = {
  type: UserDetailsEnum;
  value?: string | null | undefined;
  _id: string;
};

export type UserProfileResponseType = {
  firstName: string;
  lastName: string;
  title: string | null;
  email: string;
  interested: Interested[] | null;
  username: string;
  details: UserDetailsType[];
};
