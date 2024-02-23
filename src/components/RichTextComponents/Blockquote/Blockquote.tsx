import React, { type ReactNode } from "react";

interface BlockquoteProps {
  children: ReactNode;
}

export const Blockquote = ({ children }: BlockquoteProps): JSX.Element => (
  <blockquote className="w-full border-s-4 border-dw-grey bg-bg-grey p-4">
    <p className="max-w-[70ch] text-lg font-medium italic leading-relaxed text-secondary-950 opacity-90 sm:text-xl">
      &quot;{children}&quot;
    </p>
  </blockquote>
);
