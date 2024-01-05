import React from "react";
import { type UserDetailsType } from "@/src/api/user";
import { getCategorizedDetails } from "./UserDetails.utils";

interface UserDetailsProps {
  details: UserDetailsType[];
}

export const UserDetails = ({ details }: UserDetailsProps): JSX.Element => {
  const categorizedDetails = getCategorizedDetails(details);
  console.log("categorizedDetails =", categorizedDetails);

  return <div>UserDetails</div>;
};
