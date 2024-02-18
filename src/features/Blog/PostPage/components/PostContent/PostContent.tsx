import React from "react";
import { PortableText } from "@portabletext/react";
import type { Post as PostType } from "@/src/sanity/types";
import { RichTextComponents } from "@/src/components/RichTextComponents/RichTextComponents";
import { PostHeader } from "./components/PostHeader";

interface PostContentProps {
  data: PostType;
}

export const PostContent = ({ data }: PostContentProps): JSX.Element => (
  <article className="flex flex-1 flex-col overflow-hidden rounded-xl border-2 border-dw-grey">
    <PostHeader
      title={data.title}
      createdAt={data._createdAt}
      postImage={data.mainImage}
      authorData={data.author}
    />
    <section className="max-w-[70ch]">
      <div>
        <h2>{data.description}</h2>
        <div>
          {data.topics.map((topic) => (
            <span key={topic._id}>{topic.title}</span>
          ))}
        </div>
      </div>
      <PortableText value={data.body} components={RichTextComponents} />
    </section>
  </article>
);
