'use client';

import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import Input from '@/src/components/Input';
import { PersonalMethodType } from '../RegisterForm.types';
import Button, { ButtonVariants } from '@/src/components/Button';

interface PersonalInfoProps {
  method: UseFormReturn<PersonalMethodType, any, undefined>;
}

// !! temp
const mock = [
  {
    label: 'firstName',
    idFor: 'firstName',
    type: 'text',
  },
  {
    label: 'lastName',
    idFor: 'lastName',
    type: 'text',
  },
];

const PersonalInfo = ({ method }: PersonalInfoProps): JSX.Element => {
  const {
    handleSubmit,
    formState: { isValid },
  } = method;

  const onSubmit = handleSubmit((value): void => {
    // handleLogin(value);
    console.log('value =', value);
  });

  return (
    <FormProvider {...method}>
      <form className="flex flex-col" onSubmit={onSubmit}>
        {mock.map(({ label, idFor, type }) => (
          <Input
            key={idFor}
            label={label}
            idFor={idFor}
            type={type}
            className="mb-4"
          />
        ))}
        <Button
          variant={ButtonVariants.PRIMARY}
          type="submit"
          className="mt-2 max-mb:mt-4"
          disabled={!isValid}
        >
          continue
        </Button>
      </form>
    </FormProvider>
  );
};

export default PersonalInfo;
