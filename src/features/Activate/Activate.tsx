"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useGetActive } from "@/src/api/auth/hooks";

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

  return <div>ActivatePage{isGetActiveLoading && "load"}</div>;
};
