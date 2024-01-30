import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { postContactUs } from "../contact.methods";
import type { ContactPayloadType } from "../contact.types";

export const POST_CONTACT_US_KEY = "postContactUsKey";

interface UsePostContactUs {
  onSuccess: () => void;
}

export const usePostContactUs = ({ onSuccess }: UsePostContactUs) => {
  const { mutate, isPending, isError, error, data } = useMutation({
    mutationKey: [POST_CONTACT_US_KEY],
    mutationFn: (payload: ContactPayloadType) => postContactUs(payload),
    onSuccess,
  });

  return {
    sendMail: mutate,
    contactData: data,
    contactError: axios.isAxiosError(error) ? error : undefined,
    isContactLoading: isPending,
    isContactError: isError,
  };
};
