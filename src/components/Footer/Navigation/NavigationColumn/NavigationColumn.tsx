import Link from 'next/link';
import React from 'react';

interface NavigationColumnProps {
  name: string;
  links: {
    title: string;
    link: string;
  }[];
  isOutSourceLinks?: boolean;
}

const NavigationColumn = ({
  name,
  links,
  isOutSourceLinks = false,
}: NavigationColumnProps) => (
  <div>
    <h2 className="text-gray-900 text-m mb-6 font-semibold uppercase text-secondary">
      {name}
    </h2>
    <ul
      className="text-gray-600 font-medium text-wizard-black"
      role="navigation"
      aria-label={name}
    >
      {links.map(({ title, link }) =>
        isOutSourceLinks ? (
          <li className="mb-4">
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
          <li className="mb-4">
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
