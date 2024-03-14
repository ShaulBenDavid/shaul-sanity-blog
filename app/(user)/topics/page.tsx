import React from "react";
import { topicsMetadata } from "@/src/metadata";
import { getAllTopics } from "@/src/sanity/queries/topics";
import { Topics } from "@/src/features/Topics";

export const metadata = topicsMetadata;
export const revalidate = 86400;

const TopicsPage = async () => {
  const topicsData = await getAllTopics();

  return <Topics data={topicsData} />;
};

export default TopicsPage;
