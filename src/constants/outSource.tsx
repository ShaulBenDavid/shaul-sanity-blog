import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import theme from '@/src/styles/tailwind.theme';

export enum SocialEnum {
  GITHUB = 'github',
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter',
}

export const socialIconsConfig: Record<SocialEnum, JSX.Element> = {
  [SocialEnum.GITHUB]: (
    <AiFillGithub aria-hidden fill={theme.secondary} width={24} height={24} />
  ),
  [SocialEnum.INSTAGRAM]: (
    <AiFillInstagram
      aria-hidden
      fill={theme.secondary}
      width={24}
      height={24}
    />
  ),
  [SocialEnum.TWITTER]: (
    <AiOutlineTwitter
      aria-hidden
      fill={theme.secondary}
      width={24}
      height={24}
    />
  ),
};

export type SocialLinkConfigType = {
  title: SocialEnum;
  link: string;
};

const socialLinksConfig: SocialLinkConfigType[] = [
  {
    title: SocialEnum.GITHUB,
    link: 'https://github.com/ShaulBenDavid',
  },
  {
    title: SocialEnum.INSTAGRAM,
    link: 'https://www.instagram.com/myproductivedesks/',
  },
  {
    title: SocialEnum.TWITTER,
    link: 'https://twitter.com/shaul_bd',
  },
];

export default socialLinksConfig;
