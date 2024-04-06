"use client";

import React, { useState } from "react";
import type { Topic } from "@/src/sanity/types";
import { SearchHeader } from "@/src/components/SearchHeader";
import NoDataSVG from "@/src/assets/images/NoDataSVG.svg";
import { TopicLink } from "./TopicLink";
import { EmptyState } from "@/src/components/EmptyState";

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
      <SearchHeader
        title="Discover topics"
        placeholder="Search your interests..."
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
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
      {!filteredTopics.length && (
        <div className="flex items-center justify-center py-10">
          <EmptyState
            svgUrl={NoDataSVG}
            header={`No Results Found For: ${searchValue}`}
            description="It seems like the search didn't yield any results. Please consider refining your search criteria for better results. "
          />
        </div>
      )}
    </div>
  );
};
