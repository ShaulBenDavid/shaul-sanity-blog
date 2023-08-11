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
  goBack: () => void;
  onClick: (data: Partial<RegisterPayloadType>) => void;
  method: UseFormReturn<AccountMethodType, any, undefined>;
}

const AccountInfo = ({
  fields,
  goBack,
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
      <form
        className="mt-4 flex h-full w-full flex-col gap-4"
        onSubmit={onSubmit}
      >
        {fields.map(({ label, idFor, placeholder, type }) => (
          <Input
            key={idFor}
            label={label}
            idFor={idFor}
            type={type}
            placeholder={placeholder}
          />
        ))}
        <div className="mt-auto flex flex-row gap-4">
          <Button variant={ButtonVariants.LINK} type="button" onClick={goBack}>
            go back
          </Button>
          <Button
            variant={ButtonVariants.PRIMARY}
            type="submit"
            disabled={!isValid}
          >
            submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AccountInfo;
