"use client";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { postReadingList } from "../user.methods";
import type { ReadingListPayloadType } from "../user.types";

const POST_READING_LIST_KEY = "postReadingList";

export const usePostReadingList = () => {
  const { mutate, isError, isPending, isSuccess, error } = useMutation({
    mutationKey: [POST_READING_LIST_KEY],
    mutationFn: (payload: ReadingListPayloadType) => postReadingList(payload),
  });

  return {
    postReadingListItem: mutate,
    isUserReadingListError: isError,
    isUserReadingListSuccess: isSuccess,
    isUserReadingListLoading: isPending,
    userReadingListError: axios.isAxiosError(error) ? error : undefined,
  };
};
