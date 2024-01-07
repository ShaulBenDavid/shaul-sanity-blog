"use client";

import React from "react";
import { useGetUserProfile } from "@/src/api/user/hooks";
import { UserPageBody } from "./UserPageBody";

interface UserProps {
  username: string;
}

export const User = ({ username }: UserProps) => {
  const { userInfo, isUserInfoLoading, isUserInfoError } = useGetUserProfile({
    username,
  });

  //   !! TEMP just for testing prefetch
  if (isUserInfoLoading) return <>loading..</>;

  if (!userInfo || isUserInfoError) return <>error</>;

  return <UserPageBody userInfo={userInfo} />;
};
