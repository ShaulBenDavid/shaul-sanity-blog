"use client";

import React, { useState } from "react";
import type { Topic } from "@/src/sanity/types";
import { Header } from "./components/Header";
import { TopicLink } from "./components/TopicLink";

interface TopicsProps {
  data: Topic[];
}

export const Topics = ({ data }: TopicsProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredTopics: Topic[] = data.filter(({ title }) =>
    title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-3 py-6 md:py-10">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <section
        id="searchResults"
        /* prettier-ignore */
        className="grid-cols-auto-fit grid auto-rows-fr gap-2"
      >
        {filteredTopics.map(({ title, slug, description }, index) => (
          <TopicLink
            key={title}
            slug={slug.current}
            title={title}
            description={description}
            index={index}
          />
        ))}
      </section>
    </div>
  );
};
