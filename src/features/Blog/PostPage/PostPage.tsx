import React from "react";
import type { Post as PostType } from "@/src/sanity/types";
import { PostContent } from "./components/PostContent";
import { Aside } from "./components/Aside";

interface PostPageProps {
  post: PostType;
}

export const PostPage = ({ post }: PostPageProps): JSX.Element => (
  <div id="page-content" className="flex flex-row justify-between gap-4 pt-6">
    <PostContent data={post} />
    <Aside postSlug={post.slug.current} />
  </div>
);
