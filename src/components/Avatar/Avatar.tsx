import React from 'react';
import { stringToAvatar, stringToColor } from '@/src/utils';

type AvatarProps =
  | {
      children: React.ReactNode;
      name?: never;
    }
  | {
      children?: never;
      name: string;
    };

const Avatar = ({ children, name }: AvatarProps): JSX.Element => (
  <div style={{ backgroundColor: `${name ? stringToColor(name) : 'initial'}` }}>
    {children || stringToAvatar(name as string)}
  </div>
);

export default Avatar;
