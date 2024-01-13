import React from "react";
import { twMerge } from "tailwind-merge";

type CardProps = React.PropsWithChildren<{
  className?: string;
}>;

export const Card = ({ className, children }: CardProps): JSX.Element => (
  <div
    data-testid="card-component-test-id"
    className={twMerge("app-card p-3", className)}
  >
    {children}
  </div>
);
