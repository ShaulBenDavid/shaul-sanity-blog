"use client";

import React from "react";
import type { UseFormReturn } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import Input from "@/src/components/Input";
import Button, { ButtonVariants } from "@/src/components/Button";
import type { PersonalMethodType } from "../RegisterForm.types";
import type { RegisterPayloadType } from "@/src/api/auth";
import type { RegisterFieldType } from "../../../Register.types";

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
      <form className="flex h-full w-full flex-col gap-4" onSubmit={onSubmit}>
        {fields.map(({ label, idFor, placeholder, type }) => (
          <Input
            key={idFor}
            label={label}
            idFor={idFor}
            type={type}
            placeholder={placeholder}
          />
        ))}
        <Button
          variant={ButtonVariants.PRIMARY}
          type="submit"
          className="mt-auto"
          disabled={!isValid}
        >
          next
        </Button>
      </form>
    </FormProvider>
  );
};

export default PersonalInfo;
