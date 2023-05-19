import Link from 'next/link';
import React from 'react';
import NavigationLinks from './Navbar.config';

const Navbar = () => (
  <ul className="list-none flex flex-row gap-5">
    {NavigationLinks.map(({ title, href }) => (
      <li key={href} className="text-wizard-black text-md">
        <Link href={href}>{title}</Link>
      </li>
    ))}
  </ul>
);

export default Navbar;
