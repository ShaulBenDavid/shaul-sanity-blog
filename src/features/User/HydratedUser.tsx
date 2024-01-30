import React from "react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getUserProfile } from "@/src/api/user/user.methods";
import { getQueryClient } from "@/src/queries/getQueryClient";
import { User } from "./User";

const GET_USER_PROFILE_KEY = "getUserProfile";
interface HydratedUserProps {
  username: string;
}

export const HydratedUser = async ({ username }: HydratedUserProps) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_USER_PROFILE_KEY, username],
    queryFn: () => getUserProfile(username),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <User username={username} />
    </HydrationBoundary>
  );
};
