import React from "react";
import Link from "next/link";
import type { Routes } from "@/src/routes";
import { sideNavTabStyleConfig } from "./SideNavTab.config";
import { NavigationVariants } from "../../Header/Header.config";

interface SideNavTabProps {
  href: Routes;
  title: string;
  variant: NavigationVariants;
  isActive: boolean;
  icon?: JSX.Element;
  onClick: () => void;
}

const SideNavTab = ({
  href,
  title,
  variant,
  isActive,
  icon,
  onClick,
}: SideNavTabProps): JSX.Element => (
  <li>
    <Link
      href={href}
      onClick={onClick}
      aria-label={title}
      aria-current={isActive ? "page" : undefined}
      className={`flex flex-row content-center items-center gap-1 rounded-md capitalize  ${
        sideNavTabStyleConfig[variant]
      } ${
        isActive &&
        variant === NavigationVariants.LINK &&
        " bg-primary-900 bg-opacity-20 focus:bg-light-purple focus:bg-opacity-50"
      }`}
    >
      {icon && icon}
      {title}
    </Link>
  </li>
);

export default SideNavTab;
