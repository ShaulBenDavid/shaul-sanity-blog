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

const Main = async (): Promise<JSX.Element> => {
  const posts = await client.fetch(query);

  return (
    <section>
      <BlogList posts={posts} />
    </section>
  );
};

export default Main;
