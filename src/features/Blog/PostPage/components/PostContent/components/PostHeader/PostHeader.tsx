import React from "react";
import Image from "next/image";
import type { Author, Image as ImageType, Topic } from "@/src/sanity/types";
import { forUrl } from "@/src/sanity/sanity.utils";
import { UserPreview } from "@/src/components/UserPreview";
import { Routes } from "@/src/routes";
import { Chip } from "@/src/components/Chip";
import { Share } from "@/src/components/Share";
import { buildRoutePath } from "@/src/utils";
import { TimeSection } from "./TimeSection";

interface PostHeaderProps {
  title: string;
  createdAt: string;
  readingTime: number;
  postImage: ImageType;
  authorData: Author;
  postSlug: string;
  topics: Topic[];
}

export const PostHeader = ({
  title,
  createdAt,
  readingTime,
  postImage,
  authorData,
  postSlug,
  topics,
}: PostHeaderProps): JSX.Element => (
  <header className="flex w-full flex-col sm:overflow-hidden">
    <Image
      src={forUrl(postImage).url()}
      alt={title}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
      width={500}
      height={200}
      className="ms-[-16px] aspect-[1000/420] min-w-[calc(100%+32px)] object-cover sm:m-0 sm:w-auto"
    />
    <div className="flex flex-col gap-4 pt-2 sm:p-2 tb:p-4">
      <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
      <div className="flex flex-col gap-4 tb:flex-row tb:justify-between">
        <UserPreview
          name={authorData.name}
          title={authorData.title}
          username={authorData.username}
          imageUrl={forUrl(authorData.image).url()}
        />
        <TimeSection createdAt={createdAt} readingTime={readingTime} />
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Chip
            key={topic.slug.current}
            name={topic.title}
            href={buildRoutePath(Routes.TOPIC, topic.slug.current)}
          />
        ))}
      </div>
      <div className="md:hidden">
        <Share url={buildRoutePath(Routes.POST, postSlug)} />
      </div>
    </div>
  </header>
);
