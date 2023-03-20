import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAtom } from "jotai";
import { userDataSave, userTokenSave } from "@/store/userStore";
import { access } from "fs";

const getIndexingOrValue = (value: string | string[]): string =>
  typeof value === "string" ? value : value[0];

export default function SocialLogin() {
  const router = useRouter();
  const [, setUserData] = useAtom(userDataSave);
  const [, setUserToken] = useAtom(userTokenSave);

  useEffect(() => {
    if (!router.isReady) return;

    const { accessToken, refreshToken, nickname, email, role, error } =
      router.query;

    if (error) {
      console.log(error);
      return;
    }
    if (!nickname && !email && !role && !accessToken && !refreshToken) {
      setUserData({
        nickname: getIndexingOrValue(nickname),
        email: getIndexingOrValue(email),
        role: getIndexingOrValue(role),
      });
      setUserToken({
        accessToken: getIndexingOrValue(accessToken),
        refreshToken: getIndexingOrValue(refreshToken),
      });
    }

    router.replace("/taste");
  }, [router.isReady]);
}
