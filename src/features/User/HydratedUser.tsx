import React, { cache } from "react";
import { Hydrate, dehydrate, QueryClient } from "@tanstack/react-query";
import { getUserProfile } from "@/src/api/user/user.methods";
import { User } from "./User";

const getQueryClient = cache(() => new QueryClient());

interface UserProps {
  username: string;
}

export const HydratedUser = async ({ username }: UserProps) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["getUserProfile", username],
    queryFn: () => getUserProfile(username),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <User username={username} />
    </Hydrate>
  );
};
