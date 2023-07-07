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

export type Auth = LoginResponseType | null | undefined;

export type LoginPayloadType = {
  email: string;
  password: string;
};
