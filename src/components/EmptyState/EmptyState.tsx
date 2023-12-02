import React from "react";
import Image from "next/image";

interface EmptyStateProps {
  svgUrl?: string;
  header: string;
  description: string;
}

export const EmptyState = ({
  svgUrl,
  header,
  description,
}: EmptyStateProps): JSX.Element => (
  <div
    className="flex max-w-[500px] flex-col items-center gap-4"
    data-testid="empty-state-component-test-id"
  >
    {svgUrl && (
      <Image
        alt="Empty state"
        role="presentation"
        src={svgUrl}
        priority
        className="w-[250px]"
      />
    )}
    <h2 className="text-xl font-semibold">{header}</h2>
    <p className="text-center">{description}</p>
  </div>
);
