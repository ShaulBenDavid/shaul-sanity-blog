import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

export type SocialsLoginButtonsConfig = {
  children: JSX.Element;
  borderColor: string;
  label: string;
}[];

export const socialsLoginButtonsConfig: SocialsLoginButtonsConfig = [
  {
    children: (
      <>
        <FaTwitter aria-hidden size={24} fill="#1DA1F2" /> Twitter
      </>
    ),
    borderColor: '#1DA1F2',
    label: 'twitter',
  },
  {
    children: (
      <>
        <FcGoogle aria-hidden size={24} /> Google
      </>
    ),
    borderColor: '#FC479E',
    label: 'twitter',
  },
  {
    children: (
      <>
        <FaFacebook aria-hidden size={24} fill="#1877F2" /> Facebook
      </>
    ),
    borderColor: '#1877F2',
    label: 'twitter',
  },
];
