import React from "react";
import type { Topic } from "@/src/sanity/types";
import { Header } from "./components/Header";

interface TopicsProps {
  data: Topic[];
}

export const Topics = ({ data }: TopicsProps): JSX.Element => (
  <div className="py-6 md:py-10">
    <Header />
    {data.map((topic) => (
      <span key={topic.title}>{topic.title}</span>
    ))}
  </div>
);
