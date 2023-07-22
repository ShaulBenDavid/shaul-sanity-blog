import React from 'react';
import { render, screen } from 'test-utils';
import Drawer from './Drawer';

test('Drawer - should render element with aria-hidden false', () => {
  render(<Drawer isOpen onClose={() => ({})} />);
  const element = screen.getByTestId('drawer');

  expect(element).toHaveAttribute('aria-hidden', 'false');
});
