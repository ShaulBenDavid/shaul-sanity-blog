import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { apiMethodInstance } from "../http.service";
import type {
  UserProfileResponseType,
  PostUserImagePayloadType,
  PostUserImageResponseType,
  ReadingListResponseType,
  ReadingListPayloadType,
} from "./user.types";

export const postUserImage = (
  payload: PostUserImagePayloadType,
): Promise<PostUserImageResponseType> =>
  apiMethodInstance<PostUserImageResponseType>({
    url: ApiEndpoints.USER_IMAGE,
    method: Methods.POST,
    data: payload,
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getUserProfile = (username: string) =>
  apiMethodInstance<UserProfileResponseType>({
    url: [ApiEndpoints.USER_INFO, `${username}/`].join(""),
    method: Methods.GET,
  });

export const postReadingList = (
  payload: ReadingListPayloadType,
): Promise<ReadingListResponseType> =>
  apiMethodInstance<ReadingListResponseType>({
    url: ApiEndpoints.READING_LIST,
    method: Methods.POST,
    data: payload,
  });

export const getReadingListItem = (
  id: string,
): Promise<ReadingListResponseType> =>
  apiMethodInstance<ReadingListResponseType>({
    url: ApiEndpoints.READING_LIST_ITEM.replace(":id", id),
    method: Methods.GET,
  });
