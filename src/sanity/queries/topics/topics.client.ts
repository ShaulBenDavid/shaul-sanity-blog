import { client } from "@/src/sanity/sanity.client";
import type { Topic } from "../../types";
import { allTopicsQuery } from "./topics.queries";

export const getAllTopics = async (): Promise<Topic[]> => {
  const topics = await client.fetch(allTopicsQuery);
  return topics;
};
