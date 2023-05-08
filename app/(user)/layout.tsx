import React from 'react';
import { Inter } from 'next/font/google';
import Header from '@/src/components/Header/Header';
import '@/src/styles/global.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['cyrillic'],
});

export const metadata = {
  title: 'ShaulDev - Blog',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
