import React from "react";
import { PortableText } from "@portabletext/react";
import type { Post as PostType } from "@/src/sanity/types";
import { RichTextComponents } from "@/src/components/RichTextComponents/RichTextComponents";
import { PostHeader } from "./components/PostHeader";

interface PostContentProps {
  data: PostType;
}

export const PostContent = ({ data }: PostContentProps): JSX.Element => (
  <article className="flex flex-1 flex-col border-dw-grey sm:overflow-hidden sm:rounded-xl sm:border-2">
    <PostHeader
      title={data.title}
      createdAt={data._createdAt}
      postImage={data.mainImage}
      authorData={data.author}
      topics={data.topics}
      postSlug={data.slug.current}
    />
    <section className="max-w-[70ch] sm:px-2 tb:px-4">
      <PortableText value={data.body} components={RichTextComponents} />
    </section>
  </article>
);
