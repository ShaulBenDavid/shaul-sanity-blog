import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert';
import { AlertVariants } from './Alert.types';

describe('Alert', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Alert variant={AlertVariants.DANGER} content="some test" />
    );
    const alertElement = getByText('some test');
    expect(alertElement).toBeInTheDocument();
  });

  it('renders correctly with variant color', () => {
    const { getByTestId } = render(
      <Alert variant={AlertVariants.DANGER} content="some test" />
    );
    const alertElement = getByTestId('alert-component-test-id');
    expect(alertElement).toHaveClass('text-red-800');
    expect(alertElement).toHaveClass('bg-red-50');
  });
});
