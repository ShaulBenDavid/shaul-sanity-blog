export enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
  WRITE = 'write',
}

export type LoginResponseType = {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRoles;
  username: string;
  accessToken: string;
};

export type LoginParamsType = {
  email: string;
  password: string;
};
