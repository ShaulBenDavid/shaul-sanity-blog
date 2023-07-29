import { websiteUrl } from '@/src/constants';

type ShareContent = {
  url: string;
  subject: string;
  title: string;
};

export const shareContent: ShareContent = {
  url: websiteUrl,
  subject: 'Dev Wizard - Tech Blog',
  title: 'Welcome to dwizard, your go-to programming blog for developers.',
};
