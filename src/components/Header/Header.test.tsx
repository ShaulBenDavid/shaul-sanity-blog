import React from 'react';
import { render } from 'test-utils';
import Header from './Header';

jest.mock('next/navigation', () => ({
  useSelectedLayoutSegment: (): string => '/sign-in',
}));

test('renders Header correctly', () => {
  render(<Header />);
});
