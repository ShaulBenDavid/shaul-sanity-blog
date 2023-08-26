import React from 'react';
import Image from 'next/image';
import { Post } from '@/src/sanity/types';
import { forUrl } from '@/src/sanity/sanity.utils';
import ClientSideRoute from '../ClientSideRoute/ClientSideRoute';

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props): JSX.Element => (
  <div>
    {posts.map(
      ({
        _id,
        title,
        _createdAt,
        author,
        mainImage,
        topics,
        description,
        slug,
      }) => (
        <ClientSideRoute key={_id} route={`/post/${slug.current}`}>
          <div style={{ backgroundColor: 'sky' }} className="w-full">
            <h2>{title}</h2>
            <h3>{_createdAt}</h3>
            <p>{author.name}</p>
            <div
              style={{ width: '80px', height: '80px', position: 'relative' }}
            >
              <Image src={forUrl(mainImage).url()} alt={author.name} fill />
            </div>
            <div>
              {topics.map((topic) => (
                <span key={topic._id}>{topic.title}</span>
              ))}
            </div>

            <div>
              <p>{description}</p>
            </div>
          </div>
        </ClientSideRoute>
      )
    )}
  </div>
);

export default BlogList;
