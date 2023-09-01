import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { stringToAvatar, stringToColor } from '@/src/utils';
import { avatarSizesConfig } from './Avatar.config';
import { AvatarSizes } from './Avatar.types';

type AvatarProps =
  | {
      url: string;
      name?: never;
      size?: AvatarSizes;
      className?: string;
    }
  | {
      url?: never;
      name: string;
      size?: AvatarSizes;
      className?: string;
    };

const Avatar = ({
  url,
  name,
  size = AvatarSizes.LARGE,
  className,
}: AvatarProps): JSX.Element => (
  <div
    className={twMerge(
      `relative flex items-center justify-center overflow-hidden rounded-full uppercase text-white ${avatarSizesConfig[size]}`,
      className
    )}
    style={{ backgroundColor: `${name ? stringToColor(name) : 'initial'}` }}
    data-testid="avatar-component-test-id"
  >
    {name ? (
      stringToAvatar(name)
    ) : (
      <Image
        src={url as string}
        alt={`Avatar - ${name}`}
        className="object-cover"
        loading="lazy"
        fill
        sizes="10vh"
      />
    )}
  </div>
);

export default Avatar;
