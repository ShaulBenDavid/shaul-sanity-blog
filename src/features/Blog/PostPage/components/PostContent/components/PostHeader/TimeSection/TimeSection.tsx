import React from "react";

interface TimeSectionProps {
  createdAt: string;
  readingTime: number;
}

export const TimeSection = ({
  createdAt,
  readingTime,
}: TimeSectionProps): JSX.Element => (
  <div className="text-s flex flex-row gap-1 font-medium text-primary-gray tb:self-end">
    <time className="">
      {new Date(createdAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </time>
    <span aria-hidden>·</span>
    <span>{readingTime} min read</span>
  </div>
);
