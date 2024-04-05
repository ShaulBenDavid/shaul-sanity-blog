import React from "react";
import { getPosts } from "@/src/sanity/queries/post";
import { BlogPage } from "@/src/features/Blog/BlogPage";
import { getTopics } from "@/src/sanity/queries/home";

const Blog = async () => {
  const posts = await getPosts();
  const topics = await getTopics();

  return <BlogPage posts={posts} topics={topics} />;
};

export default Blog;
