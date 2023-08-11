'use client';

import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import Input from '@/src/components/Input';
import Button, { ButtonVariants } from '@/src/components/Button';
import { RegisterPayloadType } from '@/src/api/auth';
import { AccountMethodType } from '../RegisterForm.types';
import { RegisterFieldType } from '../../../Register.types';

interface AccountInfoProps {
  fields: RegisterFieldType[];
  onClick: (data: Partial<RegisterPayloadType>) => void;
  method: UseFormReturn<AccountMethodType, any, undefined>;
}

const AccountInfo = ({
  fields,
  onClick,
  method,
}: AccountInfoProps): JSX.Element => {
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

export default AccountInfo;
