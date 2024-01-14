import React from "react";
import type {
  DetailsCategoryType,
  PositionsCategoryType,
} from "@/src/features/User/UserPageBody/UserPageBody.types";
import { userDetailsIconsConfig } from "./UserDetails.config";
import { Position } from "./components/Position";
import { Detail } from "./components/Detail";
import { isLink } from "@/src/utils";
import { getValueFromLink } from "./UserDetails.utils";

interface UserDetailsProps {
  positions?: PositionsCategoryType[];
  details?: DetailsCategoryType[];
}

export const UserDetails = ({
  positions,
  details,
}: UserDetailsProps): JSX.Element => {
  const renderPositions = (): JSX.Element => (
    <div className="flex flex-row">
      {positions?.map(({ type, value }) => (
        <Position key={type} type={type} value={value} />
      ))}
    </div>
  );

  const renderDetails = (): JSX.Element => (
    <div className="flex flex-row flex-wrap gap-3">
      {details?.map(({ type, value }) => {
        const isLinkValue = isLink(value);
        const label = isLinkValue ? getValueFromLink(type, value) : value;

        return (
          <Detail
            key={type}
            value={label}
            icon={userDetailsIconsConfig[type]}
            href={isLinkValue ? label : undefined}
          />
        );
      })}
    </div>
  );

  return (
    <div className="flex max-w-xl flex-col gap-2 tb:min-w-[300px]">
      {positions && renderPositions()}
      <hr className="rounded-md border-dw-grey" />
      {details && renderDetails()}
    </div>
  );
};
