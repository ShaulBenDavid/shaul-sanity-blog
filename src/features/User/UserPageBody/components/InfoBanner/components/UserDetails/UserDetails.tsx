import React from "react";
import { camelCaseToWords } from "@/src/utils";
import { userDetailsIconsConfig } from "./UserDetails.config";
import type {
  DetailsType,
  PositionsType,
} from "../../../../UserPageBody.types";

interface UserDetailsProps {
  positions: PositionsType[];
  details: DetailsType[];
}

export const UserDetails = ({
  positions,
  details,
}: UserDetailsProps): JSX.Element => {
  const renderPositions = (): JSX.Element => (
    <div className="flex flex-row">
      {positions.map(({ type, value }) => (
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
    <div className="flex flex-row gap-3">
      {details.map(({ type, value }) => (
        <span key={type} className="flex flex-row items-end gap-2">
          {userDetailsIconsConfig[type]}
          <span className="line-clamp-1 max-w-[145px] text-ellipsis text-sm font-medium capitalize text-wizard-grey">
            {value}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-2">
      {positions && renderPositions()}
      <hr className="rounded-md border-dw-grey" />
      {details && renderDetails()}
    </div>
  );
};
