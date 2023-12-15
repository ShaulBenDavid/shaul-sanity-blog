"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactTypesEnum,
  type ContactPayloadType,
} from "@/src/api/contact/contact.types";
import { Input } from "@/src/components/Input";
import { TextArea } from "@/src/components/TextArea";
import { SelectInput } from "@/src/components/SelectInput";
import { Button, ButtonVariants } from "@/src/components/Button";
import { Alert, AlertVariants } from "@/src/components/Alert";
import { usePostContactUs } from "@/src/api/contact/hooks";
import { contactSchemaValidation } from "./ContactForm.utils";

export const ContactForm = (): JSX.Element => {
  const methods = useForm<ContactPayloadType>({
    resolver: zodResolver(contactSchemaValidation),
    mode: "onChange",
    delayError: 1000,
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = methods;

  const {
    sendMail,
    isContactLoading,
    contactError,
    isContactError,
    contactData,
  } = usePostContactUs({
    onSuccess: () =>
      reset({
        email: "",
        name: "",
        subjectType: undefined,
        content: "",
      }),
  });

  const onSubmit = handleSubmit((data) => {
    sendMail(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        className="flex w-full flex-col gap-4 sm:w-10/12 tb:w-3/4 md:w-5/12"
        id="contact-us"
        onSubmit={onSubmit}
      >
        {(isContactError || contactData?.message) && (
          <Alert
            variant={
              isContactError ? AlertVariants.DANGER : AlertVariants.SUCCESS
            }
            content={
              contactError?.response?.data.message || contactData?.message
            }
          />
        )}
        <Input
          label="email"
          idFor="email"
          type="text"
          placeholder="This email will get response"
          required
        />
        <Input
          label="name"
          idFor="name"
          type="text"
          placeholder="What your name ?"
          required
        />
        <SelectInput
          label="subjectType"
          idFor="subject"
          form="contact-us"
          options={Object.values(ContactTypesEnum)}
          required
        />
        <TextArea
          form="contact-us"
          label="content"
          idFor="content"
          placeholder="Write your message..."
          required
        />
        <Button
          variant={ButtonVariants.PRIMARY}
          type="submit"
          disabled={!isValid}
          className="mt-2"
          isLoading={isContactLoading}
        >
          Send
        </Button>
      </form>
    </FormProvider>
  );
};
