import React from 'react';
import { Inter } from 'next/font/google';
import defaultMetadata from '@/src/metadata';
import Header from '@/src/components/Header';
import '@/src/styles/global.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['cyrillic'],
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` w-full ${inter.variable} flex flex-col`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
