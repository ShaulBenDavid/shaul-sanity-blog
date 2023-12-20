import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { refreshMethodInstance } from "../http.service";
import type {
  PostUserImagePayloadType,
  PostUserImageResponseType,
} from "./user.types";

export const postUserImage = (
  payload: PostUserImagePayloadType,
): Promise<PostUserImageResponseType> =>
  refreshMethodInstance<PostUserImageResponseType>({
    url: ApiEndpoints.USER_IMAGE,
    method: Methods.POST,
    data: payload,
    headers: { "Content-Type": "multipart/form-data" },
  });
