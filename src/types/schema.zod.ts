import { JwtPayload } from 'jwt-decode';

// CUSTOM TYPES

// JWT

export type UserInfoType = {
  id: string;
  username: string;
  roles: string[];
  wallet: string;
  email: string;
};

export type CustomJwtType = {
  userInfo: UserInfoType | JwtPayload;
};
