import Link from 'next/link';
import React from 'react';

export type NavigationColumnLinksType = {
  title: string;
  link: string;
}[];
interface NavigationColumnProps {
  name: string;
  links: NavigationColumnLinksType;
  isOutSourceLinks?: boolean;
}

const NavigationColumn = ({
  name,
  links,
  isOutSourceLinks = false,
}: NavigationColumnProps) => (
  <div>
    <h2 className="text-gray-900 text-m mb-6 font-semibold uppercase text-secondary max-md:text-sm">
      {name}
    </h2>
    <ul
      className="text-gray-600 font-medium text-wizard-black max-md:text-sm"
      role="navigation"
      aria-label={name}
    >
      {links.map(({ title, link }) =>
        isOutSourceLinks ? (
          <li className="mb-4" key={title}>
            <a
              href={link}
              className="capitalize hover:underline"
              aria-label={title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </li>
        ) : (
          <li className="mb-4" key={title}>
            <Link
              href={link}
              className="capitalize hover:underline"
              aria-label={title}
            >
              {title}
            </Link>
          </li>
        )
      )}
    </ul>
  </div>
);

export default NavigationColumn;
