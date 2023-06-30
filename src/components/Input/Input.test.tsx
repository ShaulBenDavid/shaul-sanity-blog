import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('Label renders correctly', () => {
    const { getByText } = render(<Input idFor="email" label="email" />);
    const buttonElement = getByText('email');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders correctly with variant color', () => {
    const { getByText } = render(<Input idFor="email" label="email" />);
    const inputElement = getByText('email');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('text-secondary');
  });

  it('Error show', async () => {
    const { getByText } = render(
      <Input idFor="email" label="email" error="wrong" placeholder="email" />
    );
    const inputElement = getByText('wrong');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('text-red');
  });
});
