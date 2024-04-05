import React from "react";
import Link from "next/link";
import { Routes } from "@/src/routes";
import { buildRoutePath, stringToColor } from "@/src/utils";

interface TopicLinkProps {
  slug: string;
  title: string;
  description: string;
  index: number;
}

export const TopicLink = ({
  slug,
  title,
  description,
  index,
}: TopicLinkProps): JSX.Element => {
  const color = stringToColor(slug);
  const animationDelay = `${index * 0.07}s`;

  return (
    <Link
      href={buildRoutePath(Routes.TOPIC, slug)}
      className="group flex animate-[fadeIn_1s_ease-in_50ms_forwards] flex-col rounded-md border-2 p-2 opacity-0"
      style={{ borderColor: color, animationDelay }}
    >
      <span className="text-lg font-semibold group-hover:underline">
        <span style={{ color }}>#</span>
        {title}
      </span>
      <span className="text-md line-clamp-3">{description}</span>
    </Link>
  );
};
