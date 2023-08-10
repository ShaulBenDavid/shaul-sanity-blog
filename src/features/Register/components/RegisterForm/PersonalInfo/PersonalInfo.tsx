'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PersonalInfoSchema } from './PersonalInfo.utils';
import { RegisterPayloadType } from '@/src/api/auth';
import Input from '@/src/components/Input';

// interface PersonalInfoProps {}

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

const PersonalInfo = (): JSX.Element => {
  const methods = useForm<Pick<RegisterPayloadType, 'firstName' | 'lastName'>>({
    resolver: zodResolver(PersonalInfoSchema),
    mode: 'onChange',
    delayError: 1000,
  });
  const {
    handleSubmit,
    // formState: { isValid },
  } = methods;

  const onSubmit = handleSubmit((value): void => {
    // handleLogin(value);
    console.log('value =', value);
  });

  return (
    <FormProvider {...methods}>
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
      </form>
    </FormProvider>
  );
};

export default PersonalInfo;
