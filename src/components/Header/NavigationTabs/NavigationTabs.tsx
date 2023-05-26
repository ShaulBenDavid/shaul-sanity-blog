import Link from 'next/link';
import React from 'react';
import NavigationLinks from './NavigationTabs.config';

const NavigationTabs = () => (
  <ul className="flex list-none flex-row items-center gap-5">
    {NavigationLinks.map(({ title, href, variant }) => (
      <li key={href} className={`cursor-pointer ${variant}`}>
        <Link href={href}>{title}</Link>
      </li>
    ))}
  </ul>
);

export default NavigationTabs;
