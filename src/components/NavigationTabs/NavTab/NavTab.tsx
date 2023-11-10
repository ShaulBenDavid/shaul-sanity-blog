"use client";

import React from "react";
import Link from "next/link";
import type { Routes } from "@/src/routes";
import { NavigationVariants } from "../../Header/Header.config";
import { navTabStyleConfig } from "./NavTab.config";

interface NavTabProps {
  href: Routes;
  title: string;
  variant: NavigationVariants;
  isActive: boolean;
}

const NavTab = ({
  href,
  title,
  variant,
  isActive,
}: NavTabProps): JSX.Element => (
  <li
    className={`cursor-pointer capitalize ${navTabStyleConfig[variant]} ${
      variant === NavigationVariants.LINK &&
      isActive &&
      "before:w-full before:hover:w-full"
    }`}
  >
    <Link
      href={href}
      aria-label={title}
      aria-current={isActive ? "page" : undefined}
    >
      {title}
    </Link>
  </li>
);

export default NavTab;
