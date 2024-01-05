import { UserDetailsEnum, type UserDetailsType } from "@/src/api/user";
import type { CategorizedDetailsType } from "./UserDetails.types";

const positionTypes = [UserDetailsEnum.EDUCATION, UserDetailsEnum.JOB];

export const getCategorizedDetails = (
  details: UserDetailsType[],
): CategorizedDetailsType =>
  details.reduce<CategorizedDetailsType>(
    (acc, current) => {
      if (positionTypes.includes(current.type)) {
        acc.positions.push(current);
        return acc;
      }

      acc.extraDetails.push(current);
      return acc;
    },
    { positions: [], extraDetails: [] },
  );
