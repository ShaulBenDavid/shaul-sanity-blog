import React from "react";
import type { GetUserProfileResponseType } from "@/src/api/user";
import { Card } from "@/src/components/Card";
import { UserInfo } from "./UserInfo";

interface InfoBannerProps {
  userInfo: GetUserProfileResponseType;
}

export const InfoBanner = ({ userInfo }: InfoBannerProps): JSX.Element => {
  const { firstName, lastName, title, username } = userInfo;
  const fullName = `${firstName} ${lastName}`;

  return (
    <section>
      <Card className="w-full">
        <UserInfo fullName={fullName} username={username} title={title} />
      </Card>
    </section>
  );
};
