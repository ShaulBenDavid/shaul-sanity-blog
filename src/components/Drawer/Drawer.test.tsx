import React from 'react';
import { render, screen } from '@testing-library/react';
import Drawer from './Drawer';

test('should render element with aria-hidden false', () => {
  render(<Drawer isOpen onClose={() => ({})} />);
  const element = screen.getByTestId('drawer');

  expect(element).toHaveAttribute('aria-hidden', 'false');
});
