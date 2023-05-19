import React from 'react';
import groq from 'groq';
import { client } from '@/lib/sanity.client';
import BlogList from '@/src/components/BlogList/BlogList';

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const revalidate = 86400; // revalidate build every day

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    <main className="font-inter py-14">
      <BlogList posts={posts} />
    </main>
  );
}
