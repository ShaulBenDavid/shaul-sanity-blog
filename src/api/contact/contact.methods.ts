import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { apiMethodInstance } from "../http.service";
import type { ContactPayloadType, ContactResponseType } from "./contact.types";

export const postContactUs = (payload: ContactPayloadType) =>
  apiMethodInstance<ContactResponseType>({
    url: ApiEndpoints.CONTACT_US,
    method: Methods.POST,
    data: payload,
  });
