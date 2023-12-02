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

  const { isGetActiveLoading } = useGetActive({
    params,
    isEnabled: !!token,
  });

  return (
    <div>
      ActivatePage{isGetActiveLoading && "load"}
      <EmptyState
        svg={WarningSVG}
        header="Fail to verify"
        description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
      />
    </div>
  );
};
