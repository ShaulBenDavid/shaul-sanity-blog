import { client } from "@/src/sanity/sanity.client";
import { topicsQuery } from "./home.queries";
import type { GetTopics } from "./home.types";

const REVALIDATE = { next: { revalidate: 86400 } };

export const getTopics = async (): Promise<GetTopics> => {
  const topics = await client.fetch(topicsQuery, {}, REVALIDATE);
  return topics;
};
