import React from 'react';
import { BlobAnimation } from './components/BlobAnimation';
import theme from '@/src/styles/tailwind.theme';

const Contact = () => {
  return (
    <div>
      <BlobAnimation stroke="transparent" fill={theme.primary[950]} />
      <BlobAnimation
        stroke={theme.black}
        fill="transparent"
        time={13}
        amount={2}
      />
    </div>
  );
};

export default Contact;
