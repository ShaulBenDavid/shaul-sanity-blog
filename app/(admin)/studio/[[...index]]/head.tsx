// To customize it, use it as a children component:
import React from "react";
import { NextStudioHead } from "next-sanity/studio/head";
// Re-export `NextStudioHead` as default if you're happy with the default behavior
export { NextStudioHead } from "next-sanity/studio/head";

const CustomStudioHead = (): JSX.Element => (
  <>
    <NextStudioHead favicons={false} />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://www.sanity.io/static/images/favicons/favicon-32x32.png"
    />
  </>
);

export default CustomStudioHead;
