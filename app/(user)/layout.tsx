import React from 'react';
import { Inter } from 'next/font/google';
import { defaultMetadata } from '@/src/metadata';
import { AppProviders } from '@/src/providers';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import '@/src/styles/global.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['cyrillic'],
});

export const metadata = defaultMetadata;

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <html lang="en">
    <body className={` w-full ${inter.variable} flex flex-col font-inter`}>
      <AppProviders>
        <>
          <Header />
          <main className="mx-auto w-[1227px] pt-14 max-lg:w-[1000px] max-md:w-full max-md:px-2">
            {children}
          </main>
          <Footer />
        </>
      </AppProviders>
    </body>
  </html>
);

export default RootLayout;
