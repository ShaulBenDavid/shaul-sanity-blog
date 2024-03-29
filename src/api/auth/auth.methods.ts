import { ApiEndpoints } from "../api-endpoints.config";
import { Methods } from "../api.config";
import { apiMethodInstance, refreshMethodInstance } from "../http.service";
import type {
  LoginPayloadType,
  AuthResponseType,
  RegisterPayloadType,
  RegisterResponseType,
  UserInfoResponseType,
  PostActivePayloadType,
  PostActiveResponseType,
  GetActiveParamsType,
  GetActiveResponseType,
  PostResetPasswordResponseType,
  PostResetPasswordPayloadType,
  PostNewPasswordPayloadType,
  PostNewPasswordResponseType,
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

export const postActive = (
  payload: PostActivePayloadType,
): Promise<PostActiveResponseType> =>
  refreshMethodInstance<PostActiveResponseType>({
    url: ApiEndpoints.ACTIVATION,
    method: Methods.POST,
    data: payload,
  });

export const getActive = (
  params: GetActiveParamsType,
): Promise<GetActiveResponseType> =>
  refreshMethodInstance<GetActiveResponseType>({
    url: ApiEndpoints.ACTIVATION,
    method: Methods.GET,
    params,
  });

export const userInfo = () =>
  apiMethodInstance<UserInfoResponseType>({
    url: ApiEndpoints.USER_INFO,
    method: Methods.GET,
  });

export const postResetPassword = (
  payload: PostResetPasswordPayloadType,
): Promise<PostResetPasswordResponseType> =>
  refreshMethodInstance<PostResetPasswordResponseType>({
    url: ApiEndpoints.RESET_PASSWORD,
    method: Methods.POST,
    data: payload,
  });

export const postNewPassword = (
  payload: PostNewPasswordPayloadType,
  token: string,
): Promise<PostResetPasswordResponseType> =>
  refreshMethodInstance<PostNewPasswordResponseType>({
    url: [ApiEndpoints.NEW_PASSWORD, `${token}/`].join(""),
    method: Methods.POST,
    data: payload,
  });
