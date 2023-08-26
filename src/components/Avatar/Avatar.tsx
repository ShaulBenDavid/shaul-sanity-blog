import React from 'react';
import Image from 'next/image';
import { stringToAvatar, stringToColor } from '@/src/utils';
import { avatarSizesConfig } from './Avatar.config';
import { AvatarSizes } from './Avatar.types';

type AvatarProps =
  | {
      url: string;
      name?: never;
      size?: AvatarSizes;
    }
  | {
      url?: never;
      name: string;
      size?: AvatarSizes;
    };

const Avatar = ({
  url,
  name,
  size = AvatarSizes.LARGE,
}: AvatarProps): JSX.Element => (
  <div
    className={`relative flex items-center justify-center overflow-hidden rounded-full uppercase text-white ${avatarSizesConfig[size]}`}
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
