import React from "react";
import Image from "next/image";
import type { PortableTextReactComponents } from "@portabletext/react";
import { forUrl } from "@/src/sanity/sanity.utils";
import { Blockquote } from "./Blockquote";

export const RichTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => (
      <Image
        src={forUrl(value.asset._ref).url()}
        alt=""
        role="presentation"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
        width={500}
        height={200}
        className="aspect-[1000/420] w-full object-contain"
      />
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="flex list-inside list-disc flex-col gap-1 py-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="flex list-inside list-decimal flex-col gap-1 py-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="font-medium">{children}</li>,
    number: ({ children }) => <li className="font-medium">{children}</li>,
  },
  block: {
    h3: ({ value }) => {
      const text = value.children[0].text as string;
      const modifiedString = text.replace(/\[(.*?)\]/, "");
      const match = text.match(/\[(.*?)\]/);

      return (
        <h3
          className="text-xl font-bold tb:text-2xl"
          {...(match ? { id: match[1] } : {})}
        >
          {modifiedString}
        </h3>
      );
    },
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold tb:text-3xl">{children}</h2>
    ),
    blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value.href}
        className="app-link"
        target={value.href.startsWith("#") ? "_self" : "_blank"}
        rel="noreferrer"
      >
        {children}
      </a>
    ),
  },
};
