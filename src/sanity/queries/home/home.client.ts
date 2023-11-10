import { client } from "@/src/sanity/sanity.client";
import { topicsQuery } from "./home.queries";
import type { GetTopics } from "./home.types";

export const getTopics = async (): Promise<GetTopics> => {
  const topics = await client.fetch(topicsQuery);
  return topics;
};
