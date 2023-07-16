import { ApiEndpoints } from '../api-endpoints.config';
import { Methods } from '../api.config';
import { apiMethodInstance, refreshMethodInstance } from '../http.service';
import { LoginPayloadType, AuthResponseType } from './auth.types';

export const login = (payload: LoginPayloadType): Promise<AuthResponseType> =>
  apiMethodInstance<AuthResponseType>({
    url: ApiEndpoints.LOGIN,
    method: Methods.POST,
    data: payload,
  });

export const logout = (): Promise<void> =>
  apiMethodInstance<void>({
    url: ApiEndpoints.LOGOUT,
    method: Methods.DELETE,
  });

export const refresh = (): Promise<AuthResponseType> =>
  refreshMethodInstance<AuthResponseType>({
    url: ApiEndpoints.REFRESH,
    method: Methods.GET,
  });
