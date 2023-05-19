import React from 'react';
import Link from 'next/link';
import Logo from '@/src/assets/Icons/Logo';
import Navbar from './Navbar';
import Routes from './Navbar/Navbar.types';

const Header = () => (
  <header className="flex w-full backdrop-blur-md h-14 justify-center fixed px-8 z-10">
    <nav className="flex flex-row items-center justify-between w-[1227px]">
      <Link href={Routes.ROOT}>
        <Logo />
      </Link>
      <Navbar />
    </nav>
  </header>
);

export default Header;
