import React from 'react';
import { Inter } from 'next/font/google';
import Header from '@/src/components/Header';
import '@/src/styles/global.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['cyrillic'],
});

export const metadata = {
  title: 'Dev Wizard - A Place For Developers',
  description:
    'Get Inspired Every Day! With a great tech stacks, news, tools, accessories and more... Discover the top people in the industry',
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
