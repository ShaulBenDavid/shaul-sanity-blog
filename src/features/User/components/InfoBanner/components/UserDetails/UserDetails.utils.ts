import { type UserDetailsType } from "@/src/api/user";
import {
  positionsOptions,
  detailsOptions,
  type CategorizedDetailsType,
  type PositionsType,
  type DetailsType,
} from "./UserDetails.types";

export const getCategorizedDetails = (
  details: UserDetailsType[],
): CategorizedDetailsType =>
  details.reduce<CategorizedDetailsType>(
    (acc, current) => {
      if (positionsOptions.includes(current.type)) {
        acc.positions.push(current as PositionsType);
        return acc;
      }

      if (detailsOptions.includes(current.type)) {
        acc.details.push(current as DetailsType);
        return acc;
      }

      acc.extraDetails.push(current);
      return acc;
    },
    { positions: [], details: [], extraDetails: [] },
  );
