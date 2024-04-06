"use client";

import React, { useState } from "react";
import { SearchHeader } from "@/src/components/SearchHeader";
import type { PostPageResponse } from "@/src/sanity/queries/post";
import type { GetTopics } from "@/src/sanity/queries/home";
import { PostPreview } from "@/src/components/Posts/PostPreview";
import { buildRoutePath } from "@/src/utils";
import { Routes } from "@/src/routes";
import NoDataSVG from "@/src/assets/images/NoDataSVG.svg";
import { EmptyState } from "@/src/components/EmptyState";
import { forUrl } from "@/src/sanity/sanity.utils";
import { TopicsCarousel } from "./TopicsCarousel";

interface BlogPageProps {
  posts: PostPageResponse[];
  topics: GetTopics;
}

export const BlogPage = ({ posts, topics }: BlogPageProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredPosts: PostPageResponse[] = posts.filter(({ title }) =>
    title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-3 py-6 md:py-10">
      <SearchHeader
        title="Blog Posts"
        placeholder="Search your interests..."
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <section id="searchResults" className="flex flex-1 flex-col gap-3">
        <TopicsCarousel data={topics} />
        {filteredPosts.map(
          ({
            _id,
            title,
            author,
            mainImage,
            description,
            slug,
            _createdAt,
            estimatedReadingTime,
          }) => (
            <PostPreview
              key={_id}
              title={title}
              content={description}
              imgUrl={forUrl(mainImage).url()}
              author={author}
              href={buildRoutePath(Routes.POST, slug.current)}
              readTime={estimatedReadingTime}
              date={new Date(_createdAt)}
              isBookmarked={false}
            />
          ),
        )}
        {!filteredPosts.length && (
          <div className="flex items-center justify-center py-10">
            <EmptyState
              svgUrl={NoDataSVG}
              header={`No Results Found For: ${searchValue}`}
              description="It seems like the search didn't yield any results. Please consider refining your search criteria for better results. "
            />
          </div>
        )}
      </section>
    </div>
  );
};
