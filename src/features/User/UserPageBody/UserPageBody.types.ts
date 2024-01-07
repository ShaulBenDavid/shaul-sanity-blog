import { UserDetailsEnum, type UserDetailsType } from "@/src/api/user";

export const positionsOptions = [
  UserDetailsEnum.EDUCATION,
  UserDetailsEnum.JOB,
];

export const detailsOptions = [
  UserDetailsEnum.JOIN_DATE,
  UserDetailsEnum.GITHUB,
  UserDetailsEnum.WEBSITE,
  UserDetailsEnum.LOCATION,
];

const positionType = [UserDetailsEnum.EDUCATION, UserDetailsEnum.JOB] as const;

const detailsType = [
  UserDetailsEnum.JOIN_DATE,
  UserDetailsEnum.GITHUB,
  UserDetailsEnum.WEBSITE,
  UserDetailsEnum.LOCATION,
] as const;

type CategorizedDetailType<T extends UserDetailsEnum> = Omit<
  UserDetailsType,
  "type"
> & {
  type: T;
};

export type PositionsType = CategorizedDetailType<
  (typeof positionType)[number]
>;

export type DetailsType = CategorizedDetailType<(typeof detailsType)[number]>;

export type CategorizedDetailsType = {
  positions: PositionsType[];
  details: DetailsType[];
  extraDetails: UserDetailsType[];
};
