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
  <header className="flex w-full flex-col overflow-hidden">
    <Image
      src={forUrl(postImage).url()}
      alt={title}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
      width={500}
      height={200}
      className="aspect-[1000/420] w-auto object-cover"
    />
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-5xl font-semibold">{title}</h1>
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
