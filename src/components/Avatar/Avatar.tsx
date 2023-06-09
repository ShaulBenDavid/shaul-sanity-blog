import React from 'react';
import Image from 'next/image';
import { stringToAvatar, stringToColor } from '@/src/utils';
import { avatarSizesConfig } from './Avatar.config';
import { AvatarSizes } from './Avatar.types';

type AvatarProps =
  | {
      url: string;
      name?: never;
      size: AvatarSizes;
    }
  | {
      url?: never;
      name: string;
      size: AvatarSizes;
    };

const Avatar = ({ url, name, size }: AvatarProps): JSX.Element => (
  <div
    className={`flex items-center justify-center overflow-hidden rounded-full uppercase text-white ${avatarSizesConfig[size]}`}
    style={{ backgroundColor: `${name ? stringToColor(name) : 'initial'}` }}
    data-testid="avatar-component-test-id"
  >
    {name ? (
      stringToAvatar(name)
    ) : (
      <Image
        src={url as string}
        alt={`Avatar - ${url}`}
        className={avatarSizesConfig[size]}
        width={40}
        height={40}
        sizes="10vh"
      />
    )}
  </div>
);

export default Avatar;
