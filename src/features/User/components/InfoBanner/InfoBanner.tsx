import React from "react";
import type { GetUserProfileResponseType } from "@/src/api/user";
import { Avatar } from "@/src/components/Avatar";
import { Card } from "@/src/components/Card";

interface InfoBannerProps {
  userInfo: GetUserProfileResponseType;
}

export const InfoBanner = ({ userInfo }: InfoBannerProps): JSX.Element => {
  const { firstName, lastName } = userInfo;

  return (
    <section>
      <Card className="w-full">
        <Avatar
          name={`${firstName} ${lastName}`}
          className="h-32 w-32 text-6xl"
        />
      </Card>
    </section>
  );
};
