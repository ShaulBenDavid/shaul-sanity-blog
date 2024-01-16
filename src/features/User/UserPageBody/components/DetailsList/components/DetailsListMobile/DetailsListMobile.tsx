import React from "react";
import type { UserDetailsType } from "@/src/api/user";
import { Accordion } from "@/src/components/Accordion";

interface DetailsListMobileProps {
  details: UserDetailsType[];
}

export const DetailsListMobile = ({
  details,
}: DetailsListMobileProps): JSX.Element => (
  <section
    aria-label="User Details"
    className="flex w-full flex-col gap-2 tb:w-64"
  >
    {details.map(({ type, value }) => (
      <Accordion key={type} title={type} content={value} />
    ))}
  </section>
);
