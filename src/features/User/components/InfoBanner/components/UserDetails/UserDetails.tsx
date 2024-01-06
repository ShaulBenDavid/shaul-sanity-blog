import React from "react";
import { type UserDetailsType } from "@/src/api/user";
import { getCategorizedDetails } from "./UserDetails.utils";
import { camelCaseToWords } from "@/src/utils";
import { userDetailsIconsConfig } from "./UserDetails.config";

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

  const renderDetails = (): JSX.Element => (
    <div className="flex flex-row">
      {categorizedDetails.details.map(({ type, value }) => (
        <div key={type} className="flex-1">
          {userDetailsIconsConfig[type]}
          <p className="line-clamp-1 text-ellipsis capitalize">{value}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-2">
      {categorizedDetails.positions && renderPositions()}
      <hr className="rounded-md border-dw-grey" />
      {categorizedDetails.details && renderDetails()}
    </div>
  );
};
