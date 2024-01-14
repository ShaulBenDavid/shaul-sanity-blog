import { type UserDetailsType } from "@/src/api/user";
import {
  type CategorizedDetailsType,
  type PositionsCategoryType,
  type DetailsCategoryType,
} from "./UserPageBody.types";
import { detailsOptions, positionsOptions } from "./UserPageBody.config";

export const getCategorizedDetails = (
  details: UserDetailsType[],
): CategorizedDetailsType =>
  details.reduce<CategorizedDetailsType>(
    (acc, current) => {
      if (positionsOptions.includes(current.type)) {
        if (!acc.positions) {
          acc.positions = [];
        }

        acc.positions.push(current as PositionsCategoryType);
        return acc;
      }

      if (detailsOptions.includes(current.type)) {
        if (!acc.details) {
          acc.details = [];
        }

        acc.details.push(current as DetailsCategoryType);
        return acc;
      }

      if (!acc.extraDetails) {
        acc.extraDetails = [];
      }

      acc.extraDetails.push(current);
      return acc;
    },
    { positions: undefined, details: undefined, extraDetails: undefined },
  );
