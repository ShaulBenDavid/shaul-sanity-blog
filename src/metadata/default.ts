import { Metadata } from 'next';
import { websiteUrl } from '../constants';

export const defaultMetadata: Metadata = {
  title: {
    default: 'Dev Wizard - A Place For Developers',
    template: '%s | Dev Wizard',
  },
  description:
    'Welcome to dwizard, your go-to programming blog for developers. Explore coding tutorials, tips, and discussions on various programming languages, frameworks, and technologies.',
  applicationName: 'Dev Wizard',
  authors: { name: 'Dwizard team', url: 'https://dwizard.io' },
  themeColor: '#810CA8',
  creator: 'Dev Wizard Team',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Typescript',
    'css',
    'html',
    'Express Js',
    'MongoDB',
    'Mongoose',
    'Tech Blog',
    'programming',
    'coding',
    'development',
    'web development',
    'software development',
    'tutorials',
    'tech',
    'dwizard',
    'login',
  ],
  alternates: {
    canonical: websiteUrl,
  },
  generator: 'Next.js',
  publisher: 'Dev Wizard Team',
  manifest: '/site.json',
  icons: {
    apple: {
      url: '/apple-touch-icon.png',
      type: 'image/png',
    },
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/safari-pinned-tab.svg',
        rel: 'mask-icon',
      },
    ],
  },
  openGraph: {
    title: 'Dev Wizard - A Place For Developers',
    description:
      'Welcome to dwizard, your go-to programming blog for developers. Explore coding tutorials, tips, and discussions on various programming languages, frameworks, and technologies.',
    url: websiteUrl,
    siteName: 'Dev Wizard',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/WwKlDyy.jpg',
        alt: 'Intro',
        type: 'image/jpg',
      },
    ],
  },
  twitter: {
    title: 'Dev Wizard - A Place For Developers',
    site: '@devwizard',
    description:
      'Welcome to dwizard, your go-to programming blog for developers. Explore coding tutorials, tips, and discussions on various programming languages, frameworks, and technologies.',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://i.imgur.com/WwKlDyy.jpg',
        alt: 'Intro',
        type: 'image/jpg',
      },
    ],
  },
};
