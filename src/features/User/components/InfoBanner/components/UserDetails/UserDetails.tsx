import React from "react";
import { type UserDetailsType } from "@/src/api/user";
import { getCategorizedDetails } from "./UserDetails.utils";
import { camelCaseToWords } from "@/src/utils";

interface UserDetailsProps {
  details: UserDetailsType[];
}

export const UserDetails = ({ details }: UserDetailsProps): JSX.Element => {
  const categorizedDetails = getCategorizedDetails(details);

  const renderPositions = (): JSX.Element => (
    <div className="flex flex-row">
      {categorizedDetails.positions.map(({ type, value }) => (
        <div key={type} className="flex-1">
          <strong className="font-semibold opacity-70">
            <p className="line-clamp-1 text-ellipsis text-sm">
              {camelCaseToWords(type)}
            </p>
          </strong>
          <p className="line-clamp-1 text-ellipsis capitalize">{value}</p>
        </div>
      ))}
    </div>
  );

  return <div>{categorizedDetails.positions && renderPositions()}</div>;
};
