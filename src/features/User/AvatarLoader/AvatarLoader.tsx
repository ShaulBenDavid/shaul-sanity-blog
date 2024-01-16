import React from "react";
import Skeleton from "react-loading-skeleton";

export const AvatarLoader = (): JSX.Element => (
  <div className="mt-10 flex h-36 w-full flex-row gap-2">
    <div className="h-36 w-36 flex-shrink-0">
      <Skeleton circle width="100%" height="100%" />
    </div>
    <div className="h-36 w-full items-center pt-6">
      <Skeleton width="75%" height={30} count={1} className="my-auto mt-4" />
      <Skeleton width="90%" height={20} count={1} className="my-auto mt-4" />
    </div>
  </div>
);
