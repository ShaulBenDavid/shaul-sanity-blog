import React from "react";
import type { GetUserProfileResponseType } from "@/src/api/user";
import { Card } from "@/src/components/Card";
import { UserInfo } from "./components/UserInfo";
import { UserDetails } from "./components/UserDetails";

interface InfoBannerProps {
  userInfo: GetUserProfileResponseType;
}

export const InfoBanner = ({ userInfo }: InfoBannerProps): JSX.Element => {
  const { firstName, lastName, title, username, details } = userInfo;
  const fullName = `${firstName} ${lastName}`;

  return (
    <Card className="w-full">
      <header>
        <UserInfo fullName={fullName} username={username} title={title} />
        <UserDetails details={details} />
      </header>
    </Card>
  );
};
