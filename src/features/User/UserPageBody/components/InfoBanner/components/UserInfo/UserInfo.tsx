import React from "react";
import Link from "next/link";
import { Avatar } from "@/src/components/Avatar";

interface UserInfoProps {
  fullName: string;
  username: string;
  title?: string | null;
}

export const UserInfo = ({
  fullName,
  username,
  title,
}: UserInfoProps): JSX.Element => (
  <div className="flex flex-row items-center gap-2">
    <Avatar
      name={fullName}
      className="h-24 w-24 flex-shrink-0 text-6xl tb:h-28 tb:w-28 md:h-48 md:w-48 md:text-9xl"
    />
    <div>
      <h1 className="text-l line-clamp-1 text-ellipsis font-bold capitalize md:text-xl">
        {fullName}
      </h1>
      {title && <p className="line-clamp-2 text-ellipsis leading-5">{title}</p>}
      <Link href={`/@${username}`} className="app-link">
        @{username}
      </Link>
    </div>
  </div>
);
