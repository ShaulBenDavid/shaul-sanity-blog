"use client";

import React from "react";
import { notFound } from "next/navigation";
import { useGetUserProfile } from "@/src/api/user/hooks";
import { HttpStatusCode } from "@/src/types";
import { UserPageBody } from "./UserPageBody";
import { AvatarLoader } from "./AvatarLoader";

interface UserProps {
  username: string;
}

export const User = ({ username }: UserProps) => {
  const { userInfo, isUserInfoLoading, isUserInfoError, userInfoError } =
    useGetUserProfile({
      username,
    });

  if (isUserInfoLoading) {
    return <AvatarLoader />;
  }

  if (userInfoError?.response?.status === HttpStatusCode.NOT_FOUND) {
    notFound();
  }
  if (!userInfo || isUserInfoError) {
    // !! should send to 500 error
    return <>error</>;
  }

  return <UserPageBody userInfo={userInfo} />;
};
