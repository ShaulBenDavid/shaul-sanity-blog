import React from "react";
import Link from "next/link";
import type { Routes } from "@/src/routes";

interface SideNavTabProps {
  href: Routes;
  title: string;
  isActive: boolean;
  icon?: JSX.Element;
  onClick: () => void;
}

export const SideNavTab = ({
  href,
  title,
  isActive,
  icon,
  onClick,
}: SideNavTabProps): JSX.Element => (
  <Link
    href={href}
    onClick={onClick}
    aria-label={title}
    aria-current={isActive ? "page" : undefined}
    className={`focus:bg-gray group flex w-full flex-row content-center  items-center gap-1 rounded-md p-2 capitalize text-gray-900 focus:bg-opacity-20  ${
      isActive &&
      "bg-primary-900 bg-opacity-20 focus:bg-light-purple focus:bg-opacity-50"
    }`}
  >
    {icon && icon}
    {title}
  </Link>
);
