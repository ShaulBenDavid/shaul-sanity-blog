import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsBookmarkPlus, BsBookmarkPlusFill } from 'react-icons/bs';
import { formatDateToCustomFormat } from '@/src/utils';
import { forUrl } from '@/src/sanity/sanity.utils';
import type { Author } from '@/src/sanity/types';
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
    <Link href={href} aria-hidden className="flex-shrink-0" tabIndex={-1}>
      <figure className="dw-skeleton group relative">
        <Image
          src={imgUrl}
          alt={title}
          loading="lazy"
          sizes="15wv"
          width={0}
          height={0}
          className="aspect-square h-28 w-auto object-cover sm:aspect-video mb:w-40 sm:h-[130px] sm:w-auto"
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
        />
        <button
          type="button"
          id="save-button"
          aria-label={`Save post in bookmarked ${title}`}
          aria-pressed={isBookmarked}
          className="h-fit text-secondary-950 hover:text-primary-950"
        >
          {isBookmarked ? (
            <BsBookmarkPlusFill className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <BsBookmarkPlus className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </button>
      </div>
      <Link href={href}>
        <h4 className="line-clamp-2 text-base font-bold text-black sm:text-lg">
          {title}
        </h4>
        <p className="line-clamp-1 text-sm text-primary-gray max-xs:hidden sm:line-clamp-2 sm:text-base">
          {content}
        </p>
      </Link>
      <div className="mt-auto flex flex-row items-center gap-1 text-xs text-primary-gray sm:text-sm">
        <time dateTime={new Date(date).toISOString()}>
          {formatDateToCustomFormat(date)}
        </time>
        -<small className="text-xs sm:text-sm">{readTime} min read</small>
      </div>
    </div>
  </article>
);

export default PostPreview;
