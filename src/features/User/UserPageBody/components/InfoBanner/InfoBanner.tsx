"use client";

import React from "react";
import { Card } from "@/src/components/Card";
import { UserInfo } from "./components/UserInfo";
import { UserDetails } from "./components/UserDetails";
import { ProfileActions } from "./components/ProfileActions";
import { ActionDropdown } from "./components/ActionDropdown";
import type {
  DetailsCategoryType,
  PositionsCategoryType,
} from "../../UserPageBody.types";

interface InfoBannerProps {
  fullName: string;
  title: string | null;
  username: string;
  positions?: PositionsCategoryType[];
  details?: DetailsCategoryType[];
}

export const InfoBanner = ({
  fullName,
  title,
  username,
  positions,
  details,
}: InfoBannerProps): JSX.Element => (
  <section aria-label="User Info">
    <Card className="w-full tb:h-56 md:h-72">
      <header className="flex h-full flex-col gap-6 tb:flex-row tb:justify-between tb:gap-2">
        <div className="flex w-full flex-row justify-between tb:w-96 md:w-[450px]">
          <UserInfo fullName={fullName} username={username} title={title} />
          <div className="tb:hidden">
            <ActionDropdown />
          </div>
        </div>
        <div className="flex flex-col gap-6 tb:items-end tb:gap-0 md:pb-12 lg:flex-row-reverse lg:items-center lg:pb-0">
          <ProfileActions />
          <UserDetails positions={positions} details={details} />
        </div>
      </header>
    </Card>
  </section>
);
