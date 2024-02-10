"use client";

import React from "react";
import { Button, ButtonVariants } from "@/src/components/Button";
import { ActionDropdown } from "../ActionDropdown";

//  TODO implement logic
// interface ProfileActionsProps {
//   userId: string;
// }

export const ProfileActions = (): JSX.Element => (
  <div className="flex h-full flex-row">
    <Button variant={ButtonVariants.PRIMARY} className="tb:w-36" disabled>
      Follow
    </Button>
    <div className="hidden tb:flex">
      <ActionDropdown />
    </div>
  </div>
);
