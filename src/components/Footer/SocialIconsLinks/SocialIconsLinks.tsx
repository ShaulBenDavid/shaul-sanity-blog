import React from "react";
import type { SocialLinkConfigType } from "@/src/constants/socials";
import { socialIconsConfig } from "./SocialIconsLinks.config";

interface SocialIconsLinksProps {
  links: SocialLinkConfigType[];
}

export const SocialIconsLinks = ({
  links,
}: SocialIconsLinksProps): JSX.Element => (
  <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
    {links.map(({ link, title }) => (
      <a
        key={link}
        href={link}
        aria-label={title}
        className="text-gray-500 transition-opacity hover:text-gray-900 hover:opacity-70"
        target="_blank"
        rel="noopener noreferrer"
      >
        {socialIconsConfig[title]}
        <span className="sr-only">{title}</span>
      </a>
    ))}
  </div>
);
