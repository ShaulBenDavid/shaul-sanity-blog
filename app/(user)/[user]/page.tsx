import React from "react";
import { notFound } from "next/navigation";
import { HydratedUser } from "@/src/features/User";

const AT_SIGN = "%40";

type UserPageProps = {
  params: {
    user: string;
  };
};

const UserPage = async ({ params: { user } }: UserPageProps) => {
  const username: string | null = user.startsWith(AT_SIGN)
    ? user.replace(AT_SIGN, "")
    : null;

  if (!username) {
    notFound();
  }

  return (
    <article>
      {/* @ts-expect-error Server Component */}
      <HydratedUser username={username} />
    </article>
  );
};

export default UserPage;
