import React from "react";

interface AccordionProps {
  title: string;
  content: string;
}

export const Accordion = ({ title, content }: AccordionProps): JSX.Element => (
  <details className="app-card group overflow-hidden p-3">
    <summary className="text-l flex w-full cursor-pointer items-center justify-between font-bold capitalize">
      <h3>{title}</h3>
      <div
        aria-hidden="true"
        className="after:content-['+'] group-open:after:content-['-']"
      />
    </summary>
    <div className="max-h-0 overflow-hidden pt-3 transition-all duration-500 group-open:max-h-96">
      <p className="opacity-80">{content}</p>
    </div>
  </details>
);
