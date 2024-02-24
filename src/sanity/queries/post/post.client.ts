import { client } from "@/src/sanity/sanity.client";
import { postQuery, postsQuery } from "./post.queries";
import type { PostPageResponse } from "./post.types";

export const getPost = async (slug: string): Promise<PostPageResponse> => {
  const topics = await client.fetch(postQuery, { slug });
  return topics;
};

export const getPosts = async (): Promise<PostPageResponse[]> => {
  const topics = await client.fetch(postsQuery);
  return topics;
};
