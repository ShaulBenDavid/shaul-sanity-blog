import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import theme from '@/src/styles/tailwind.theme';

export type SocialLinkConfigType = {
  title: string;
  link: string;
  icon: JSX.Element;
};

const socialLinksConfig: SocialLinkConfigType[] = [
  {
    title: 'Github',
    link: 'https://github.com/ShaulBenDavid',
    icon: (
      <AiFillGithub aria-hidden fill={theme.secondary} width={24} height={24} />
    ),
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/myproductivedesks/',
    icon: (
      <AiFillInstagram
        aria-hidden
        fill={theme.secondary}
        width={24}
        height={24}
      />
    ),
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/shaul_bd',
    icon: (
      <AiOutlineTwitter
        aria-hidden
        fill={theme.secondary}
        width={24}
        height={24}
      />
    ),
  },
];

export default socialLinksConfig;
