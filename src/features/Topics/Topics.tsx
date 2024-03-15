"use client";

import React, { useState } from "react";
import type { Topic } from "@/src/sanity/types";
import { Header } from "./components/Header";

interface TopicsProps {
  data: Topic[];
}

export const Topics = ({ data }: TopicsProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredTopics: Topic[] = data.filter(({ title }) =>
    title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="py-6 md:py-10">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      {filteredTopics.map((topic) => (
        <span key={topic.title}>{topic.title}</span>
      ))}
    </div>
  );
};
