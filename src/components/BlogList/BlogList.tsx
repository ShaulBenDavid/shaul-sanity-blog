import React from "react";
import type { Post } from "@/src/sanity/types";
import { forUrl } from "@/src/sanity/sanity.utils";
import PostPreview from "../Posts/PostPreview";

type Props = {
  posts: Post[];
};

export const BlogList = ({ posts }: Props): JSX.Element => (
  <>
    {posts
      .concat(posts)
      .concat(posts)
      .concat(posts)
      .concat(posts)
      .concat(posts)
      .concat(posts)
      .concat(posts)
      .concat(posts)
      .map(
        ({ _id, title, author, mainImage, description, slug, _createdAt }) => (
          <PostPreview
            key={_id}
            title={title}
            content={description}
            imgUrl={forUrl(mainImage).url()}
            author={author}
            href={`/post/${slug.current}`}
            readTime={2}
            date={new Date(_createdAt)}
            isBookmarked={false}
          />
        ),
      )}
  </>
);
