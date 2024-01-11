import React from "react";
import type {
  DetailsType,
  PositionsType,
} from "@/src/features/User/UserPageBody/UserPageBody.types";
import { userDetailsIconsConfig } from "./UserDetails.config";
import { Position } from "./components/Position";
import { Detail } from "./components/Detail";
import { isLink } from "@/src/utils";

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
    <div className="flex flex-row flex-wrap gap-3">
      {details.map(
        ({ type, value }) =>
          value && (
            <Detail
              key={type}
              value={value ?? ""}
              icon={userDetailsIconsConfig[type]}
              href={isLink(value) ? value : undefined}
            />
          ),
      )}
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
