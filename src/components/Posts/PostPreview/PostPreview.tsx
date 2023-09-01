import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsBookmarkPlus, BsBookmarkPlusFill } from 'react-icons/bs';
import { formatDateToCustomFormat } from '@/src/utils';
import { forUrl } from '@/src/sanity/sanity.utils';
import { Author } from '@/src/sanity/types';
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
  <article
    className="flex h-28 w-full flex-row gap-1 sm:h-[130px]"
    data-testid="post-preview-component-test-id"
  >
    <Link href={href} aria-hidden className="flex-shrink-0">
      <figure
        className="group relative animate-[skeleton-loading_1s_ease-in-out_infinite]"
        id="test2"
      >
        <Image
          src={imgUrl}
          alt={title}
          loading="lazy"
          sizes="15wv"
          width={0}
          height={0}
          className="aspect-video h-28 w-40 object-cover sm:h-[130px] sm:w-full"
        />
      </figure>
    </Link>
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-row justify-between">
        <UserPreview
          name={author.name}
          title={author.title}
          username={author.username}
          imageUrl={forUrl(author.image).url()}
          avatarStyles="max-sm:h-6 max-sm:w-6"
          className="max-sm:flex-row max-sm:items-center max-sm:gap-1"
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
        <h4 className="text-base font-bold text-black sm:text-lg">{title}</h4>
        <p className="line-clamp-2 text-sm text-primary-gray sm:text-base">
          {content}
        </p>
      </Link>
      <div className="mt-auto flex flex-row items-center gap-1 text-xs text-primary-gray sm:text-sm">
        <time>{formatDateToCustomFormat(date)}</time>-
        <small className="text-xs sm:text-sm">{readTime} min read</small>
      </div>
    </div>
  </article>
);

export default PostPreview;
