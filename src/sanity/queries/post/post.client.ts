import { client } from "@/src/sanity/sanity.client";
import { allPostsQuery, postQuery, postsQuery } from "./post.queries";
import type { PostPageResponse } from "./post.types";
import type { Post } from "../../types";

const REVALIDATE = { next: { revalidate: 86400 } };

export const getPost = async (slug: string): Promise<PostPageResponse> => {
  const posts = await client.fetch(postQuery, { slug }, REVALIDATE);
  return posts;
};

export const getPosts = async (): Promise<PostPageResponse[]> => {
  const posts = await client.fetch(postsQuery, {}, REVALIDATE);
  return posts;
};

export const getAllPosts = async (): Promise<Post[]> => {
  const posts = await client.fetch(allPostsQuery, {}, REVALIDATE);
  return posts;
};
