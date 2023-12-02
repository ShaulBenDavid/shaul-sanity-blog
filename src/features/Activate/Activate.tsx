"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useGetActive } from "@/src/api/auth/hooks";
import { EmptyState } from "@/src/components/EmptyState";
import WarningSVG from "@/src/assets/WarningDrawSVG.svg";

const TOKEN_QUERY_PARAMS = "token";

export const Activate = (): JSX.Element => {
  const searchParams = useSearchParams();
  const token = searchParams.get(TOKEN_QUERY_PARAMS);
  const params = {
    token: token ?? "",
  };

  const { isGetActiveLoading, isGetActiveError } = useGetActive({
    params,
  });

  return (
    <div className="my-10">
      {isGetActiveLoading && "load"}
      {isGetActiveError && (
        <EmptyState
          svgUrl={WarningSVG}
          header="Fail to verify"
          description="Oops! It looks like the verification via the provided link didn't go through. Please double-check the link or try an alternative method. If the issue persists, reach out to our support team for assistance."
        />
      )}
    </div>
  );
};
