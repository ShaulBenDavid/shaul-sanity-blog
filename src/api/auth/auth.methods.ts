import { ApiEndpoints } from '../api-endpoints.config';
import { Methods } from '../api.config';
import { apiMethodInstance } from '../http.service';
import { LoginPayloadType, LoginResponseType } from './auth.types';

export const login = (payload: LoginPayloadType): Promise<LoginResponseType> =>
  apiMethodInstance<LoginResponseType>({
    url: ApiEndpoints.LOGIN,
    method: Methods.POST,
    data: payload,
  });

export const logout = (): Promise<void> =>
  apiMethodInstance<void>({
    url: ApiEndpoints.LOGOUT,
    method: Methods.DELETE,
  });

export const refresh = (): Promise<void> =>
  apiMethodInstance<void>({
    url: ApiEndpoints.REFRESH,
    method: Methods.GET,
  });
