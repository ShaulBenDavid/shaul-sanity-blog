import React from "react";
import { twMerge } from "tailwind-merge";

type CardProps = React.PropsWithChildren<{
  className?: string;
}>;

export const Card = ({ className, children }: CardProps): JSX.Element => (
  <div
    data-testid="card-component-test-id"
    className={twMerge(
      "rounded-md border-[1px] border-dw-grey bg-bg-grey p-3",
      className,
    )}
  >
    {children}
  </div>
);
