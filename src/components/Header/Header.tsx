import React from 'react';
import Link from 'next/link';
import Logo from '@/src/assets/Icons/Logo';
import Navbar from './Navbar';

const Header = () => (
  <header className="flex w-screen backdrop-blur-md h-14 justify-center fixed">
    <nav className="flex flex-row items-center justify-between w-[1227px]">
      <Link href="/">
        <Logo />
      </Link>
      <Navbar />
    </nav>
  </header>
);

export default Header;
