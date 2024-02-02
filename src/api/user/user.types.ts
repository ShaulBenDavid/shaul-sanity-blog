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

export enum UserReadListEnum {
  SANITY_POST = "sanityPost",
}

export type UserDetailsType = {
  type: UserDetailsEnum;
  value: string;
  _id: string;
};

export type UserProfileResponseType = {
  _id: string;
  profileImage: string | null;
  lastLogin: Date;
  firstName: string;
  lastName: string;
  title: string | null;
  email: string;
  interested: Interested[] | null;
  username: string;
  details: UserDetailsType[];
};

export interface UserReadingListItemType {
  type: UserReadListEnum;
  id: string;
  slug: string;
  title: string;
}

export type ReadingListPayloadType = UserReadingListItemType;

export type ReadingListResponseType = MessageResponseType;
