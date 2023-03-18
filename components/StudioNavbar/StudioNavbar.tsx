import React from "react";
import Link from "next/link";
import type { LayoutProps } from "sanity";
// import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: LayoutProps) => {
  return (
    <>
      <div>
        {/* <ArrowUturnLeftIcon /> */}
        <Link href="/">Go To Website</Link>
      </div>
      <>{props.renderDefault(props)}</>
    </>
  );
};

export default StudioNavbar;
