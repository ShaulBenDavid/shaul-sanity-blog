import { color } from '@storybook/theming';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const socialLinksConfig = [
  {
    name: 'Github',
    link: 'https://github.com/ShaulBenDavid',
    icon: <AiFillGithub aria-hidden fill={color.secondary} />,
  },
];

export default socialLinksConfig;
