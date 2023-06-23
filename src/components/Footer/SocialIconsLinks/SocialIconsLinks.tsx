import React from 'react';
import {
  SocialLinkConfigType,
  socialIconsConfig,
} from '@/src/constants/outSource';

interface SocialIconsLinksProps {
  links: SocialLinkConfigType[];
}

const SocialIconsLinks = ({ links }: SocialIconsLinksProps): JSX.Element => (
  <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
    {links.map(({ link, title }) => (
      <a
        key={link}
        href={link}
        aria-label={title}
        className="text-gray-500 hover:text-gray-900 transition-opacity hover:opacity-70"
        target="_blank"
        rel="noopener noreferrer"
      >
        {socialIconsConfig[title]}
        <span className="sr-only">{title}</span>
      </a>
    ))}
  </div>
);
export default SocialIconsLinks;
