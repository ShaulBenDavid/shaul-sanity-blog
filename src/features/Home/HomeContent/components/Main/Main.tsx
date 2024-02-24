import React from "react";
import { BlogList } from "@/src/components/BlogList/BlogList";
import { getPosts } from "@/src/sanity/queries/post";

export const revalidate = 86400; // revalidate build every day

export const Main = async (): Promise<JSX.Element> => {
  const posts = await getPosts();

  return (
    <section className="flex flex-1 flex-col gap-3">
      {posts && <BlogList posts={posts} />}
    </section>
  );
};
