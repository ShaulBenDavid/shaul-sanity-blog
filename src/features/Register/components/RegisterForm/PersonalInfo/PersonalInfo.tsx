'use client';

import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import Input from '@/src/components/Input';
import Button, { ButtonVariants } from '@/src/components/Button';
import { PersonalMethodType } from '../RegisterForm.types';
import { RegisterPayloadType } from '@/src/api/auth';
import { RegisterFieldType } from '../../../Register.types';

interface PersonalInfoProps {
  fields: RegisterFieldType[];
  onClick: (data: Partial<RegisterPayloadType>) => void;
  method: UseFormReturn<PersonalMethodType, any, undefined>;
}

const PersonalInfo = ({
  fields,
  method,
  onClick,
}: PersonalInfoProps): JSX.Element => {
  const {
    handleSubmit,
    formState: { isValid },
  } = method;

  const onSubmit = handleSubmit((value): void => {
    onClick(value);
  });

  return (
    <FormProvider {...method}>
      <form className="flex flex-col" onSubmit={onSubmit}>
        {fields.map(({ label, idFor, type }) => (
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
          next
        </Button>
      </form>
    </FormProvider>
  );
};

export default PersonalInfo;
