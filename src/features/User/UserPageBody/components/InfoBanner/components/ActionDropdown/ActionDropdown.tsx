"use client";

import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Dropdown } from "@/src/components/Dropdown";
import { AppLink } from "@/src/components/AppLink";
//  TODO implement logic
// interface ActionDropdownProps {}

export const ActionDropdown = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dropdown
      label="profile menu"
      isOpen={isOpen}
      setState={setIsOpen}
      className="right-0"
      trigger={
        <span className="flex h-10 w-10 items-center justify-center text-wizard-black duration-200 hover:opacity-70">
          <BiDotsVerticalRounded size={24} />
        </span>
      }
    >
      <div className="w-36">
        <AppLink onClick={() => ({})}>Block</AppLink>
        <AppLink onClick={() => ({})}>Report</AppLink>
      </div>
    </Dropdown>
  );
};
