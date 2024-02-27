import React from "react";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/src/components/RichTextComponents/RichTextComponents";
import { PostHeader } from "./components/PostHeader";
import type { PostPageResponse } from "@/src/sanity/queries/post";

interface PostContentProps {
  data: PostPageResponse;
}

export const PostContent = ({ data }: PostContentProps): JSX.Element => (
  <article className="flex flex-1 flex-col gap-3 border-dw-grey sm:overflow-hidden sm:rounded-xl sm:border-2">
    <PostHeader
      title={data.title}
      createdAt={data._createdAt}
      readingTime={data.estimatedReadingTime}
      postImage={data.mainImage}
      authorData={data.author}
      topics={data.topics}
      postSlug={data.slug.current}
    />
    <section className="flex flex-col gap-2 pb-8 text-lg sm:px-2 tb:px-4 tb:text-xl">
      <PortableText value={data.body} components={RichTextComponents} />
    </section>
  </article>
);
