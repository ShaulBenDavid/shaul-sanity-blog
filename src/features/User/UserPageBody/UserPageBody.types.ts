import type { UserDetailsEnum, UserDetailsType } from "@/src/api/user";

export type PositionsType =
  | UserDetailsEnum.JOIN_DATE
  | UserDetailsEnum.GITHUB
  | UserDetailsEnum.WEBSITE
  | UserDetailsEnum.LOCATION;

export type DetailsType =
  | UserDetailsEnum.JOIN_DATE
  | UserDetailsEnum.GITHUB
  | UserDetailsEnum.WEBSITE
  | UserDetailsEnum.LOCATION;

type CategorizedDetailType<T extends UserDetailsEnum> = Omit<
  UserDetailsType,
  "type"
> & {
  type: T;
};

export type PositionsCategoryType = CategorizedDetailType<PositionsType>;

export type DetailsCategoryType = CategorizedDetailType<DetailsType>;

export type CategorizedDetailsType = {
  positions?: PositionsCategoryType[];
  details?: DetailsCategoryType[];
  extraDetails?: UserDetailsType[];
};
