import React from "react";
import { getPosts } from "@/src/sanity/queries/post";
import { BlogPage } from "@/src/features/Blog/BlogPage";

const Blog = async () => {
  const posts = await getPosts();

  return <BlogPage posts={posts} />;
};

export default Blog;
