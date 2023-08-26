import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsBookmarkPlus, BsBookmarkPlusFill } from 'react-icons/bs';
import { formatDateToCustomFormat } from '@/src/utils';
import { Author } from '@/src/sanity/types';
import forUrl from '@/lib/urlFor';
import UserPreview from '../../UserPreview';

export interface PostPreviewProps {
  title: string;
  content: string;
  href: string;
  imgUrl: string;
  date: Date;
  readTime: number;
  isBookmarked: boolean;
  author: Author;
}

const PostPreview = ({
  title,
  content,
  href,
  imgUrl,
  date,
  readTime,
  isBookmarked,
  author,
}: PostPreviewProps): JSX.Element => (
  <article className="flex h-[130px] flex-row gap-1">
    <Link href={href}>
      <figure
        className="group relative h-full w-[200px] animate-[skeleton-loading_1s_ease-in-out_infinite] "
        id="test2"
      >
        <Image src={imgUrl} alt={title} loading="lazy" sizes="15vw" fill />
      </figure>
    </Link>
    <div className="flex h-full flex-col">
      <div className="flex flex-row justify-between">
        <UserPreview
          name={author.name}
          title={author.title}
          username={author.username}
          imageUrl={forUrl(author.image).url()}
        />
        <button
          type="button"
          aria-label={`Save post ${title}`}
          aria-pressed={isBookmarked}
          className="text-secondary-950 hover:text-primary-950"
        >
          {isBookmarked ? (
            <BsBookmarkPlusFill size={24} />
          ) : (
            <BsBookmarkPlus size={24} />
          )}
        </button>
      </div>
      <Link href={href}>
        <h4 className="text-lg font-bold text-black">{title}</h4>
        <p className="line-clamp-2 text-base text-primary-gray">{content}</p>
      </Link>
      <div className="mt-auto flex flex-row items-center gap-1 text-sm text-primary-gray">
        <time>{formatDateToCustomFormat(date)}</time>-
        <small>{readTime} min read</small>
      </div>
    </div>
  </article>
);

export default PostPreview;
