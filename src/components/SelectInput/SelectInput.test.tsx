import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { render } from 'test-utils';
import { SelectInput } from './SelectInput';

describe('SelectInput', () => {
  const Wrapper = (props: { children: JSX.Element }) => {
    const formMethods = useForm();

    return <FormProvider {...formMethods}>{props.children}</FormProvider>;
  };
  const options = ['blue', 'yellow', 'green'];
  it('Label renders correctly', () => {
    const { getByTestId } = render(
      <Wrapper>
        <SelectInput idFor="email" label="email" options={options} />
      </Wrapper>
    );
    const buttonElement = getByTestId('selectinput-component-test-id');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders correctly with options correctly', () => {
    const { getByTestId } = render(
      <Wrapper>
        <SelectInput idFor="email" label="email" options={options} />
      </Wrapper>
    );
    const selectInput = getByTestId('selectinput-component-test-id');
    const selectOptions = Array.from(
      selectInput.getElementsByTagName('option')
    );
    options.unshift('');

    selectOptions.forEach((option, index) => {
      expect(option).toHaveAttribute('value', options[index]);
    });
    expect(selectInput.getElementsByTagName('option').length).toBe(4);
  });
});
