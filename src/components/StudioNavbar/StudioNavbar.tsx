import React from "react";
import Link from "next/link";
import type { LayoutProps } from "sanity";

export const StudioNavbar = (props: LayoutProps) => (
  <>
    <div>
      <Link href="/">Go To Website</Link>
    </div>
    <>{props.renderDefault(props)}</>
  </>
);
