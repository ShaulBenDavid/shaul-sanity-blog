import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { apiMethodInstance, refreshMethodInstance } from "../http.service";
import type {
  LoginPayloadType,
  AuthResponseType,
  RegisterPayloadType,
  RegisterResponseType,
} from "./auth.types";

export const login = (payload: LoginPayloadType): Promise<AuthResponseType> =>
  apiMethodInstance<AuthResponseType>({
    url: ApiEndpoints.LOGIN,
    method: Methods.POST,
    data: payload,
  });

export const signUp = (
  payload: RegisterPayloadType,
): Promise<RegisterResponseType> =>
  apiMethodInstance<RegisterResponseType>({
    url: ApiEndpoints.SIGN_UP,
    method: Methods.POST,
    data: payload,
  });

export const logout = (): Promise<void> =>
  refreshMethodInstance<void>({
    url: ApiEndpoints.LOGOUT,
    method: Methods.DELETE,
  });

export const refresh = (): Promise<AuthResponseType> =>
  refreshMethodInstance<AuthResponseType>({
    url: ApiEndpoints.REFRESH,
    method: Methods.GET,
  });
