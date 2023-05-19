import Link from 'next/link';
import React from 'react';
import NavigationLinks from './Navbar.config';

const Navbar = () => (
  <ul className="list-none flex flex-row gap-5 items-center">
    {NavigationLinks.map(({ title, href, variant }) => (
      <li key={href} className={variant}>
        <Link href={href}>{title}</Link>
      </li>
    ))}
  </ul>
);

export default Navbar;
