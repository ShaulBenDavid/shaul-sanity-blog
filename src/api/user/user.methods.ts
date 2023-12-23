import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { apiMethodInstance } from "../http.service";
import type {
  GetUserProfileResponseType,
  PostUserImagePayloadType,
  PostUserImageResponseType,
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
  apiMethodInstance<GetUserProfileResponseType>({
    url: [ApiEndpoints.USER_INFO, `${username}/`].join(""),
    method: Methods.GET,
  });
