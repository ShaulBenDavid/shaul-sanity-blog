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
        <main className="mx-auto w-[1227px] pt-14 font-inter max-lg:w-[1000px] max-md:w-full max-tb:px-2">
          {children}
        </main>
      </body>
    </html>
  );
}
