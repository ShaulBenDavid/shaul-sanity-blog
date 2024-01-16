import React from "react";
import type { UserDetailsType } from "@/src/api/user";
import { Card } from "@/src/components/Card";

interface DetailsListDesktopProps {
  details: UserDetailsType[];
}

export const DetailsListDesktop = ({
  details,
}: DetailsListDesktopProps): JSX.Element => (
  <section aria-label="User Details" className="flex flex-col gap-2 tb:w-64">
    {details.map(({ type, value }) => (
      <Card key={type}>
        <h3 className="text-xl font-bold capitalize">{type}</h3>
        <p className="mt-2 opacity-80">{value}</p>
      </Card>
    ))}
  </section>
);
