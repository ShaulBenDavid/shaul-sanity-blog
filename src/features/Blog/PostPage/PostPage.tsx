import React from "react";
import { PostContent } from "./components/PostContent";
import { Aside } from "./components/Aside";
import type { PostPageResponse } from "@/src/sanity/queries/post";

interface PostPageProps {
  postsData: PostPageResponse;
}

export const PostPage = ({ postsData }: PostPageProps): JSX.Element => (
  <div
    id="page-content"
    className="flex flex-row justify-between gap-4 sm:pt-6"
  >
    <PostContent data={postsData} />
    <Aside postSlug={postsData.slug.current} />
  </div>
);
