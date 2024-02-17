import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { Post as PostType } from "@/src/sanity/types";
import { forUrl } from "@/src/sanity/sanity.utils";
import { RichTextComponents } from "@/src/components/RichTextComponents/RichTextComponents";

interface PostContentProps {
  data: PostType;
}

export const PostContent = ({ data }: PostContentProps): JSX.Element => (
  <article className="flex flex-1 flex-col">
    <section>
      <div>
        <div style={{ width: "80px", height: "80px", position: "relative" }}>
          <Image
            src={forUrl(data.mainImage).url()}
            alt={data.author.name}
            fill
          />
          <div>
            <h3>{data.author.name}</h3>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <h1>{data.title}</h1>
        <p>
          {new Date(data._createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <div>
        <h2>{data.description}</h2>
        <div>
          {data.topics.map((topic) => (
            <span key={topic._id}>{topic.title}</span>
          ))}
        </div>
      </div>
    </section>
    <PortableText value={data.body} components={RichTextComponents} />
  </article>
);
