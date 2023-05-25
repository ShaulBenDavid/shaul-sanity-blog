import React from 'react';
import Link from 'next/link';
import Logo from '@/src/assets/Icons/Logo';
import Routes from './Navbar/Navbar.types';
import Navbar from './Navbar';

const Header = (): JSX.Element => (
  <header className="flex w-full backdrop-blur-2xl h-14 justify-center fixed px-8 z-10 bg-white bg-opacity-[0.5]">
    <nav className="flex flex-row items-center justify-between w-[1227px]">
      <Link href={Routes.ROOT}>
        <Logo />
      </Link>
      <Navbar />
    </nav>
  </header>
);

export default Header;
