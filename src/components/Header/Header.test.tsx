import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

jest.mock('next/navigation', () => ({
  useSelectedLayoutSegment: (): string => '/sign-in',
}));

test('renders Header correctly', () => {
  render(<Header />);
});
