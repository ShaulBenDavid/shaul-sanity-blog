import { useMutation } from '@tanstack/react-query';
import { postContactUs } from '../contact.methods';
import type { ContactPayloadType } from '../contact.types';

export const POST_CONTACT_US_KEY = 'postContactUsKey';

export const usePostContactUs = () => {
  const { data, mutate, isLoading, isError } = useMutation(
    [POST_CONTACT_US_KEY],
    (payload: ContactPayloadType) => postContactUs(payload)
  );

  return {
    sendMail: mutate,
    contactUsData: data,
    isContactLoading: isLoading,
    isContactError: isError,
  };
};
