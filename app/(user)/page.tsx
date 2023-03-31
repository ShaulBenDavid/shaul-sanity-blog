import React from 'react';
import groq from 'groq';
import { previewData } from 'next/headers';
import { client } from '@/lib/sanity.client';
import BlogList from '@/components/BlogList/BlogList';
import PreviewSuspense from '@/components/PreviewSuspense/PreviewSuspense';
import PreviewBlogList from '@/components/PreviewBlogList/PreviewBlogList';

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const revalidate = 86400; // revalidate build every day

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<p>Loading...</p>}>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  return (
    <main>
      <BlogList posts={posts} />
    </main>
  );
}