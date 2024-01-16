import React from "react";
import type { UserDetailsType } from "@/src/api/user";
import { DetailsListDesktop } from "./components/DetailsListDesktop";
import { DetailsListMobile } from "./components/DetailsListMobile";

interface DetailsListProps {
  details: UserDetailsType[];
}

export const DetailsList = ({ details }: DetailsListProps): JSX.Element => (
  <>
    <div className="hidden md:flex">
      <DetailsListDesktop details={details} />
    </div>
    <div className="hidden max-md:flex">
      <DetailsListMobile details={details} />
    </div>
  </>
);
