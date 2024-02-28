import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Post as PostType } from "@/src/sanity/types";
import { PostPage } from "@/src/features/Blog/PostPage";
import {
  type PostPageResponse,
  getPost,
  getAllPosts,
} from "@/src/sanity/queries/post";
import { WEBSITE_URL } from "@/src/constants";

type PostProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 86400; // revalidate build every day

export async function generateStaticParams() {
  const slugs: PostType[] = await getAllPosts();
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
      url: `${WEBSITE_URL}@${author.username}`,
    },
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}

const Post = async ({ params: { slug } }: PostProps) => {
  const post: PostPageResponse = await getPost(slug);

  if (!post) {
    notFound();
  }

  return <PostPage postsData={post} />;
};

export default Post;
