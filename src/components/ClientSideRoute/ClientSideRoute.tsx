"use client";

import React from "react";
import Link from "next/link";
import type { Url } from "next/dist/shared/lib/router/router";

const ClientSideRoute = ({
  children,
  route,
}: React.PropsWithChildren<{ route: Url }>) => (
  <Link href={route}>{children}</Link>
);

export default ClientSideRoute;
