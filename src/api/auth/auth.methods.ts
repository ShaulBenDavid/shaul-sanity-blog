import { ApiEndpoints } from '../api-endpoints.config';
import { apiMethodInstance } from '../http.service';
import { LoginParamsType, LoginResponseType } from './auth.types';

export const login = (params: LoginParamsType): Promise<LoginResponseType> =>
  apiMethodInstance<LoginResponseType>({
    url: ApiEndpoints.LOGIN,
    params,
  });
