import React from "react";
import forUrl from "@/lib/urlFor";
import Image from "next/image";
import type { PortableTextReactComponents } from "@portabletext/react";

type Props = {};

const RichTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return (
        <div style={{ width: "80px", height: "80px", position: "relative" }}>
          <Image src={forUrl(value.imageUrl).url()} alt="" />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
  },
  block: {
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
};

export default RichTextComponents;
