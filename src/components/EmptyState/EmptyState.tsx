import React from "react";
import Image from "next/image";

interface EmptyStateProps {
  svg: string;
  header: string;
  description: string;
}

export const EmptyState = ({
  svg,
  header,
  description,
}: EmptyStateProps): JSX.Element => (
  <div className="flex max-w-[500px] flex-col items-center gap-4">
    <Image
      alt="Empty state"
      role="presentation"
      src={svg}
      priority
      className="w-[300px]"
    />
    <h2 className="text-xl font-semibold">{header}</h2>
    <p className="text-center">{description}</p>
  </div>
);
