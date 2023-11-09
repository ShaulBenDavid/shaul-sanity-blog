import React from 'react';
import S from './BlobAnimation.module.css';

interface BlobAnimationProps {
  fill?: string;
  stroke?: string;
  time?: number;
  amount?: number;
}

export const BlobAnimation = ({
  fill,
  stroke,
  time = 20,
  amount = 5,
}: BlobAnimationProps): JSX.Element => {
  const style = {
    '--time': `${time}s`,
    '--amount': amount,
  } as React.CSSProperties;

  return (
    <div className={S.tkBlob} aria-hidden style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 747.2 726.7"
        stroke={stroke}
        strokeWidth={3}
        fill={fill}
      >
        <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z" />
      </svg>
    </div>
  );
};