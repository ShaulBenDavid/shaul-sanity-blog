"use client";

import React from "react";
import Link from "next/link";
import type { Routes } from "@/src/routes";
import { NavLinkAnimation } from "./NavTab.config";

interface NavTabProps {
  href: Routes;
  title: string;
  isActive: boolean;
}

export const NavTab = ({ href, title, isActive }: NavTabProps): JSX.Element => (
  <li
    className={`relative cursor-pointer text-base capitalize text-wizard-black ${NavLinkAnimation} ${
      isActive && "before:w-full before:hover:w-full"
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
