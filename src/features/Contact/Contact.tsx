import React from 'react';
import { ContactHeader } from './components/ContactHeader';
import { ContactForm } from './components/ContactForm';

const Contact = () => {
  return (
    <section className="flex h-full pt-10 md:items-center w-full flex-row justify-between">
      <ContactHeader />
      <ContactForm />
    </section>
  );
};

export default Contact;
