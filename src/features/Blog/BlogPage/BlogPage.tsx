"use client";

import React, { useState } from "react";
import { SearchHeader } from "@/src/components/SearchHeader";
import type { PostPageResponse } from "@/src/sanity/queries/post";
import { PostPreview } from "@/src/components/Posts/PostPreview";
import { buildRoutePath } from "@/src/utils";
import { Routes } from "@/src/routes";
import { forUrl } from "@/src/sanity/sanity.utils";

interface BlogPageProps {
  posts: PostPageResponse[];
}

export const BlogPage = ({ posts }: BlogPageProps): JSX.Element => {
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
      </section>
    </div>
  );
};
