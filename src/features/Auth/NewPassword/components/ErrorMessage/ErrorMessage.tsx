"use client";

import React from "react";
import Link from "next/link";
import WarningSVG from "@/src/assets/WarningDrawSVG.svg";
import { EmptyState } from "@/src/components/EmptyState";
import { Routes } from "@/src/routes";

export const ErrorMessage = (): JSX.Element => (
  <EmptyState
    svgUrl={WarningSVG}
    header="Something went wrong"
    description="Oops! It looks like the verification via the provided link didn't go through. Please double-check the link or try an alternative method. If the issue persists, reach out to our support team for assistance."
    footer={
      <div className="grid w-80 grid-cols-2 flex-row items-center gap-2">
        <Link href={Routes.CONTACT_US} className="app-link whitespace-nowrap">
          Contact Us
        </Link>
        <Link href={Routes.RESET_PASSWORD} className="button-link">
          Reset Password
        </Link>
      </div>
    }
  />
);
