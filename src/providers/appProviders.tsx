"use client";

import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { SkeletonTheme } from "react-loading-skeleton";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { QueryProvider } from "./query.provider";
import { AxiosInterceptor } from "../api";
import { AuthContextProvider } from "../context/auth";
import { AuthProvider } from "./auth.provider";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

const MAX_NUMBER_DISPLAYED_TOASTS = 4;

export const AppProviders = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <QueryProvider>
    <AuthContextProvider>
      <AxiosInterceptor>
        <AuthProvider>
          <SkeletonTheme baseColor="#E8E3EA" highlightColor="#F3F2F4">
            {children}
            <ToastContainer limit={MAX_NUMBER_DISPLAYED_TOASTS} />
          </SkeletonTheme>
          <Suspense fallback={null}>
            <ProgressBar
              height="4px"
              color="#810ca8"
              options={{ showSpinner: false }}
              shallowRouting
            />
          </Suspense>
        </AuthProvider>
      </AxiosInterceptor>
    </AuthContextProvider>
  </QueryProvider>
);
