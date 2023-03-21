export interface UserDataType {
  nickname?: string | null;
  email: string | null;
  role?: string | null;
}

export interface UserTokenType {
  accessToken: string | null;
  refreshToken: string;
}
