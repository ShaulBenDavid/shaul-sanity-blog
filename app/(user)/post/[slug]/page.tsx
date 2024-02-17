import React from "react";
import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "@/src/sanity/sanity.client";
import type { Post as PostType } from "@/src/sanity/types";
import { PostPage } from "@/src/features/Blog/PostPage";

type Props = {
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

const Post = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0] {
        ...,
        author->,
        topics[]->
    } 
    `;
  const post: PostType = await client.fetch(query, { slug });

  if (!post) {
    notFound();
  }

  return <PostPage post={post} />;
};

export default Post;
