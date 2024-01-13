"use client";

import React from "react";
import { Card } from "@/src/components/Card";
import { UserInfo } from "./components/UserInfo";
import { UserDetails } from "./components/UserDetails";
import { ProfileActions } from "./components/ProfileActions";
import { ActionDropdown } from "./components/ActionDropdown";
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
  <section aria-label="User Info">
    <Card className="w-full">
      <header className="flex flex-col gap-6">
        <div className="flex flex-row justify-between">
          <UserInfo fullName={fullName} username={username} title={title} />
          <div>
            <ActionDropdown />
          </div>
        </div>
        <ProfileActions />
        <UserDetails positions={positions} details={details} />
      </header>
    </Card>
  </section>
);
