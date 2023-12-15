import React from "react";
import { ContactHeader } from "./components/ContactHeader";
import { ContactForm } from "./components/ContactForm";

export const Contact = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-between pt-10 md:flex-row md:items-center">
      <ContactHeader />
      <ContactForm />
    </section>
  );
};
