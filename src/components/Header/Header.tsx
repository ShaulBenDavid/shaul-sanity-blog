import React from 'react';
import Link from 'next/link';
import Logo from '@/src/assets/Icons/Logo';
import Navbar from './Navbar';
import Routes from './Navbar/Navbar.types';

const Header = () => (
  <header className="flex w-screen backdrop-blur-md h-14 justify-center fixed">
    <nav className="flex flex-row items-center justify-between w-[1227px] mx-8">
      <Link href={Routes.ROOT}>
        <Logo />
      </Link>
      <Navbar />
    </nav>
  </header>
);

export default Header;
