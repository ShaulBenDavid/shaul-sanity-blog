import React from 'react';
import { Post } from '@/src/sanity/types';
import { forUrl } from '@/src/sanity/sanity.utils';
import PostPreview from '../Posts/PostPreview';

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props): JSX.Element => (
  <>
    {posts
      .concat(posts)
      .concat(posts)
      .concat(posts)
      .concat(posts)
      .concat(posts)
      .concat(posts)
      .concat(posts)
      .concat(posts)
      .map(({ _id, title, author, mainImage, description, slug }) => (
        <PostPreview
          key={_id}
          title={title}
          content={description}
          imgUrl={forUrl(mainImage).url()}
          author={author}
          href={`/post/${slug.current}`}
          readTime={2}
          date={new Date()}
          isBookmarked={false}
        />
      ))}
  </>
);

export default BlogList;
