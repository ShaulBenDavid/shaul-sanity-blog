'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type ContactPayloadType } from '@/src/api/contact/contact.types';
import { contactSchemaValidation } from './ContactForm.utils';
import Input from '@/src/components/Input';
import TextArea from '@/src/components/TextArea';

export const ContactForm = (): JSX.Element => {
  const methods = useForm<ContactPayloadType>({
    resolver: zodResolver(contactSchemaValidation),
    mode: 'onChange',
    delayError: 1000,
  });

  return (
    <FormProvider {...methods}>
      <form className="w-5/12 gap-4 flex flex-col">
        <Input
          label="email"
          idFor="email"
          type="text"
          placeholder="This email will get response"
        />
        <Input
          label="Full Name"
          idFor="name"
          type="text"
          placeholder="What your name ?"
        />
        <Input
          label="Subject"
          idFor="subject"
          type="text"
          placeholder="'New idea for the website'"
        />
        <TextArea
          label="content"
          idFor="content"
          placeholder="Write your message..."
        />
      </form>
    </FormProvider>
  );
};
