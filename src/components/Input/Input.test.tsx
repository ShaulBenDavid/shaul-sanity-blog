import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { render } from 'test-utils';
import Input from './Input';

describe('Input', () => {
  const Wrapper = (props: { children: JSX.Element }) => {
    const formMethods = useForm();

    return <FormProvider {...formMethods}>{props.children}</FormProvider>;
  };
  it('Label renders correctly', () => {
    const { getByText } = render(
      <Wrapper>
        <Input idFor="email" label="email" />
      </Wrapper>
    );
    const buttonElement = getByText('email');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders correctly with variant color', () => {
    const { getByText } = render(
      <Wrapper>
        <Input idFor="email" label="email" />
      </Wrapper>
    );
    const inputElement = getByText('email');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('text-secondary-950');
  });
});
