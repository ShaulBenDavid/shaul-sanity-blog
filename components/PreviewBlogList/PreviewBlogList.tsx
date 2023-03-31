'use client';

import React from 'react';
import usePreview from '@/lib/sanity.preview';
import BlogList from '../BlogList/BlogList';

type Props = {
  query: any;
};

export default function PreviewBlogList({ query }: Props) {
  const data = usePreview(null, query);
  return <BlogList posts={data} />;
}
