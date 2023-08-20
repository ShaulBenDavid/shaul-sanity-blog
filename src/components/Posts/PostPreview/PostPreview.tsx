import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDateToCustomFormat } from '@/src/utils';
import { Author } from '@/src/sanity/types';
import forUrl from '@/lib/urlFor';
import UserPreview from '../../UserPreview';

interface PostPreviewProps {
  title: string;
  content: string;
  href: string;
  imgUrl: string;
  date: Date;
  readTime: string;
  author: Author;
}

const PostPreview = ({
  title,
  content,
  href,
  imgUrl,
  date,
  readTime,
  author,
}: PostPreviewProps): JSX.Element => (
  <article>
    <Link href={href}>
      <figure>
        <Image src={imgUrl} alt={title} fill loading="lazy" sizes="20vw" />
      </figure>
    </Link>
    <div>
      <UserPreview
        name={author.name}
        title={author.title}
        username={author.name}
        imageUrl={forUrl(author.image).url()}
      />
      <Link href={href}>
        <h4>{title}</h4>
        <p>{content}</p>
      </Link>
      <div>
        <time>{formatDateToCustomFormat(date)}</time>
        <small>{readTime} min read</small>
      </div>
    </div>
  </article>
);

export default PostPreview;
