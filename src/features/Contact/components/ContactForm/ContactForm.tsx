'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ContactTypesEnum,
  type ContactPayloadType,
} from '@/src/api/contact/contact.types';
import Input from '@/src/components/Input';
import TextArea from '@/src/components/TextArea';
import { SelectInput } from '@/src/components/SelectInput';
import Button, { ButtonVariants } from '@/src/components/Button';
import { contactSchemaValidation } from './ContactForm.utils';

export const ContactForm = (): JSX.Element => {
  const methods = useForm<ContactPayloadType>({
    resolver: zodResolver(contactSchemaValidation),
    mode: 'onChange',
    delayError: 1000,
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = handleSubmit((data) => {
    console.log('text =', data);
  });

  return (
    <FormProvider {...methods}>
      <form
        className="w-5/12 gap-4 flex flex-col"
        id="contact-us"
        onSubmit={onSubmit}
      >
        <Input
          label="email"
          idFor="email"
          type="text"
          placeholder="This email will get response"
        />
        <Input
          label="name"
          idFor="name"
          type="text"
          placeholder="What your name ?"
        />
        <SelectInput
          label="subjectType"
          idFor="subject"
          form="contact-us"
          options={Object.values(ContactTypesEnum)}
        />
        <TextArea
          // form="contact-us"
          label="content"
          idFor="content"
          placeholder="Write your message..."
        />
        <Button
          variant={ButtonVariants.PRIMARY}
          type="submit"
          disabled={!isValid}
        >
          Send
        </Button>
      </form>
    </FormProvider>
  );
};
