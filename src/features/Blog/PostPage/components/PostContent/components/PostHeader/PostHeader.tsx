import React from "react";
import Image from "next/image";
import type { Author, Image as ImageType } from "@/src/sanity/types";
import { forUrl } from "@/src/sanity/sanity.utils";
import { UserPreview } from "@/src/components/UserPreview";

interface PostHeaderProps {
  title: string;
  createdAt: string;
  postImage: ImageType;
  authorData: Author;
}

export const PostHeader = ({
  title,
  createdAt,
  postImage,
  authorData,
}: PostHeaderProps): JSX.Element => (
  <header className="flex w-full flex-col sm:overflow-hidden">
    <Image
      src={forUrl(postImage).url()}
      alt={title}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
      width={500}
      height={200}
      className="ms-[-8px] aspect-[1000/420] min-w-[calc(100%+16px)] object-cover sm:m-0 sm:w-auto"
    />
    <div className="flex flex-col gap-4 pt-2 sm:p-2 tb:p-4">
      <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
      <UserPreview
        name={authorData.name}
        title={authorData.title}
        username={authorData.username}
        imageUrl={forUrl(authorData.image).url()}
      />
      <div>
        <time className="text-s font-medium text-primary-gray">
          {new Date(createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </div>
    </div>
  </header>
);
