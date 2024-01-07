import React from "react";
import { Card } from "@/src/components/Card";
import { UserInfo } from "./components/UserInfo";
import { UserDetails } from "./components/UserDetails";
import type { DetailsType, PositionsType } from "../../UserPageBody.types";

interface InfoBannerProps {
  fullName: string;
  title: string | null;
  username: string;
  positions: PositionsType[];
  details: DetailsType[];
}

export const InfoBanner = ({
  fullName,
  title,
  username,
  positions,
  details,
}: InfoBannerProps): JSX.Element => (
  <Card className="w-full">
    <header className="flex flex-col gap-6">
      <UserInfo fullName={fullName} username={username} title={title} />
      <UserDetails positions={positions} details={details} />
    </header>
  </Card>
);
