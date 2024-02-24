import { client } from "@/src/sanity/sanity.client";
import { postQuery } from "./post.queries";
import type { PostPageResponse } from "./post.types";

export const getPost = async (slug: string): Promise<PostPageResponse> => {
  const topics = await client.fetch(postQuery, { slug });
  return topics;
};
