"use client";

import React from "react";
import { useGetUserProfile } from "@/src/api/user/hooks";

interface UserProps {
  username: string;
}

export const User = ({ username }: UserProps) => {
  const { userInfo, isUserInfoLoading } = useGetUserProfile({ username });

  //   !! TEMP just for testing prefetch
  if (isUserInfoLoading) return <>loading..</>;
  return <div>{JSON.stringify(userInfo)}</div>;
};
