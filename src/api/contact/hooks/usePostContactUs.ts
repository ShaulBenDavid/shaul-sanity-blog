import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { postContactUs } from '../contact.methods';
import type { ContactPayloadType } from '../contact.types';

export const POST_CONTACT_US_KEY = 'postContactUsKey';

interface UsePostContactUs {
  onSuccess: () => void;
}

export const usePostContactUs = ({ onSuccess }: UsePostContactUs) => {
  const { mutate, isLoading, isError, error, data } = useMutation(
    [POST_CONTACT_US_KEY],
    (payload: ContactPayloadType) => postContactUs(payload),
    {
      onSuccess,
    }
  );

  return {
    sendMail: mutate,
    contactData: data,
    contactError: axios.isAxiosError(error) ? error : undefined,
    isContactLoading: isLoading,
    isContactError: isError,
  };
};
