"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getReadingListItem } from "../user.methods";

const GET_READING_LIST_ITEM_KEY = "getReadingListItem";

interface UseGetReadingListItemProps {
  id: string;
}

export const useGetReadingListItem = ({ id }: UseGetReadingListItemProps) => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: [GET_READING_LIST_ITEM_KEY, id],
    queryFn: () => getReadingListItem(id),
    gcTime: 60 * 60 * 1000,
  });

  return {
    readingListItem: data,
    isReadingListLoading: isLoading,
    isReadingListError: isError,
    readingListError: axios.isAxiosError(error) ? error : undefined,
  };
};
