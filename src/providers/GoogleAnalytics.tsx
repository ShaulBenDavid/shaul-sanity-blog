"use client";

import React from "react";
import { GoogleAnalytics as Analytics } from "@next/third-parties/google";
import { getCookieConsentValue } from "react-cookie-consent";

export const GoogleAnalytics = (): JSX.Element | null =>
  getCookieConsentValue() === "true" ? (
    <Analytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string} />
  ) : null;
