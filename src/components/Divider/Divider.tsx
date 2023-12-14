import React from "react";

interface DividerProps {
  title: string;
}

export const Divider = ({ title }: DividerProps): JSX.Element => (
  <div className="flex flex-row items-center gap-2">
    <div
      className="h-[2px] w-full bg-gradient-to-l from-wizard-grey from-10%"
      aria-hidden
    />
    <span className="text-center text-sm capitalize">{title}</span>
    <div
      className="h-[2px] w-full bg-gradient-to-r from-wizard-grey from-10%"
      aria-hidden
    />
  </div>
);
