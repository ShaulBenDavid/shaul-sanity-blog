"use client";

import React from "react";
import type { UserProfileResponseType } from "@/src/api/user";
import { getCategorizedDetails } from "./UserPageBody.utils";
import { InfoBanner } from "./components/InfoBanner";
import { DetailsList } from "./components/DetailsList";

interface UserPageBodyProps {
  userInfo: UserProfileResponseType;
}

export const UserPageBody = ({ userInfo }: UserPageBodyProps): JSX.Element => {
  const {
    firstName,
    lastName,
    title,
    username,
    details: userDetails,
  } = userInfo;

  const { positions, details, extraDetails } =
    getCategorizedDetails(userDetails);

  return (
    <div className="flex flex-col gap-2 py-8">
      {userInfo && (
        <>
          <InfoBanner
            fullName={`${firstName} ${lastName}`}
            title={title}
            username={username}
            positions={positions}
            details={details}
          />
          {extraDetails && <DetailsList details={extraDetails} />}
        </>
      )}
    </div>
  );
};
