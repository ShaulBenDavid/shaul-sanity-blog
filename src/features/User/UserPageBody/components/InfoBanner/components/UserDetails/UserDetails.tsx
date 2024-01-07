import React from "react";
import type {
  DetailsType,
  PositionsType,
} from "@/src/features/User/UserPageBody/UserPageBody.types";
import { userDetailsIconsConfig } from "./UserDetails.config";
import { Position } from "./components/Position";

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
        <Position key={type} type={type} value={value ?? ""} />
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
