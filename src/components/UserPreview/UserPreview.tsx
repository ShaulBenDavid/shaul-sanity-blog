import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Avatar from '../Avatar';

interface UserPreviewProps {
  name: string;
  title?: string | null;
  imageUrl?: string | null;
  username: string;
  avatarStyles?: string;
  className?: string;
}

const UserPreview = ({
  name,
  title,
  imageUrl,
  username,
  avatarStyles,
  className,
}: UserPreviewProps): JSX.Element => (
  <Link
    href={`/@${username}`}
    className="flex flex-row items-center gap-1"
    data-testid="user-preview-component-test-id"
  >
    <Avatar
      {...(imageUrl ? { url: imageUrl } : { name })}
      className={avatarStyles}
    />
    <div className={twMerge('flex flex-col capitalize', className)}>
      <span className="text-sm">{name}</span>
      {title && (
        <span className="text-xs font-medium text-primary-gray">{title}</span>
      )}
    </div>
  </Link>
);

export default UserPreview;
