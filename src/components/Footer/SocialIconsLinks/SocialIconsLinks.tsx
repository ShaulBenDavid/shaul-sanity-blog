import React from 'react';
import { SocialLinkConfigType } from '@/src/constants/outSource';

interface SocialIconsLinks {
  links: SocialLinkConfigType[];
}

const SocialIconsLinks = ({ links }: SocialIconsLinks): JSX.Element => (
  <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
    {links.map(({ link, title, icon }) => (
      <a
        key={link}
        href={link}
        aria-label={title}
        className="text-gray-500 hover:text-gray-900 transition-opacity hover:opacity-70"
      >
        {icon}
        <span className="sr-only">{title}</span>
      </a>
    ))}
  </div>
);
export default SocialIconsLinks;
