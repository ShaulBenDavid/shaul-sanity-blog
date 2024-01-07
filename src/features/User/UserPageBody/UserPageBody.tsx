import React from "react";
import type { UserProfileResponseType } from "@/src/api/user";
import { getCategorizedDetails } from "./UserPageBody.utils";
import { InfoBanner } from "./components/InfoBanner";

interface UserPageBodyProps {
  userInfo: UserProfileResponseType;
}

export const UserPageBody = ({ userInfo }: UserPageBodyProps): JSX.Element => {
  const { firstName, lastName, title, username, details } = userInfo;
  const fullName = `${firstName} ${lastName}`;

  const categorizedDetails = getCategorizedDetails(details);

  return (
    <div className="py-8">
      {userInfo && (
        <InfoBanner
          fullName={fullName}
          title={title}
          username={username}
          positions={categorizedDetails.positions}
          details={categorizedDetails.details}
        />
      )}
    </div>
  );
};
