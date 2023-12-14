import Link from "next/link";
import React from "react";

interface ChipProps {
  name: string;
  href: string;
}

export const Chip = ({ name, href }: ChipProps): JSX.Element => (
  <Link href={href} data-testid="chip-component-test-id">
    <div className="h-fit w-fit rounded-[20px] bg-dw-grey px-3 py-2 text-sm capitalize text-wizard-black hover:underline">
      {name}
    </div>
  </Link>
);
