import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { AuthContextProvider } from '@/src/context/auth';

jest.mock('next/navigation', () => ({
  useSelectedLayoutSegment: (): string => '/sign-in',
}));

test('renders Header correctly', () => {
  render(
    <AuthContextProvider>
      <Header />
    </AuthContextProvider>
  );
});
