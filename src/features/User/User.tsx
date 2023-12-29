"use client";

import React from "react";
import { useGetUserProfile } from "@/src/api/user/hooks";
import { UserBanner } from "./components/UserBanner";

interface UserProps {
  username: string;
}

export const User = ({ username }: UserProps) => {
  const { userInfo, isUserInfoLoading } = useGetUserProfile({ username });

  //   !! TEMP just for testing prefetch
  if (isUserInfoLoading) return <>loading..</>;

  return (
    <div className="py-8">{userInfo && <UserBanner userInfo={userInfo} />}</div>
  );
};
