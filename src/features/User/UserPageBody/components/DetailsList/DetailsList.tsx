import React from "react";
import type { UserDetailsType } from "@/src/api/user";
import { Accordion } from "@/src/components/Accordion";

interface DetailsListProps {
  details: UserDetailsType[];
}

export const DetailsList = ({ details }: DetailsListProps): JSX.Element => (
  <section aria-label="User Details" className="flex flex-col gap-2">
    {details.map(({ type, value }) => (
      // !! Fix content
      <Accordion key={type} title={type} content={value ?? ""} />
    ))}
  </section>
);
