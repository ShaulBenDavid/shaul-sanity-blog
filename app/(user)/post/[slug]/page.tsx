import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "@/src/sanity/sanity.client";
import type { Post as PostType } from "@/src/sanity/types";
import { PostPage } from "@/src/features/Blog/PostPage";
import { type PostPageResponse, getPost } from "@/src/sanity/queries/post";
import { websiteUrl } from "@/src/constants";

type PostProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 86400; // revalidate build every day

export async function generateStaticParams() {
  const query = groq`
    *[_type=='post']{
        slug
    } 
    `;
  const slugs: PostType[] = await client.fetch(query);
  const slugRoutes = slugs.map((post) => post.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: PostProps): Promise<Metadata> {
  const { title, description, author }: PostPageResponse = await getPost(slug);

  return {
    title,
    description,
    authors: {
      name: author.username,
      url: `${websiteUrl}@${author.username}`,
    },
  };
}

const Post = async ({ params: { slug } }: PostProps) => {
  const post: PostPageResponse = await getPost(slug);

  if (!post) {
    notFound();
  }

  return <PostPage post={post} />;
};

export default Post;
