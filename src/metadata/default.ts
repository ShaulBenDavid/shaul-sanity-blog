import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: {
    default: 'Dev Wizard - A Place For Developers',
    template: '%s | Dev Wizard',
  },
  description:
    'Get Inspired Every Day! With a great tech stacks, news, tools, accessories and more... Discover the top people in the industry',
  applicationName: 'Dev Wizard',
  authors: { name: 'Shaul Ben David' },
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
  ],
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
};

export default defaultMetadata;
