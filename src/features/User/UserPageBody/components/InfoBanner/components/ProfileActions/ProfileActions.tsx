"use client";

import React from "react";
import { Button, ButtonVariants } from "@/src/components/Button";
import { ActionDropdown } from "../ActionDropdown";

//  TODO implement logic
// interface ProfileActionsProps {
//   userId: string;
// }

export const ProfileActions = (): JSX.Element => (
  <div className="flex flex-row">
    <Button variant={ButtonVariants.PRIMARY}>Follow</Button>
    <div className="hidden">
      <ActionDropdown />
    </div>
  </div>
);
