import { UserDataType, UserTokenType } from "@/types/store/userStoreTypes";
import { atomWithStorage } from "jotai/utils";

export const userDataSave = atomWithStorage<UserDataType>("userData", {
  nickname: null,
  email: null,
  role: null,
});
export const userTokenSave = atomWithStorage<UserTokenType>("userToken", {
  accessToken: null,
  refreshToken: null,
});
