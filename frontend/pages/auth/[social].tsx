import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAtom } from "jotai";
import { userDataSave, userTokenSave } from "@/store/userStore";

const getIndexingOrValue = (value: string | string[]): string =>
  typeof value === "string" ? value : value[0];

export default function SocialLogin() {
  const router = useRouter();
  const [, setUserData] = useAtom(userDataSave);
  const [, setUserToken] = useAtom(userTokenSave);

  useEffect(() => {
    if (!router.isReady) return;

    const accessToken = router.query.accessToken;
    const refreshToken = router.query.refreshToken;
    const nickname = router.query.nickname;
    const email = router.query.role;
    const role = router.query.role;
    const error = router.query.error;

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
    }

    router.replace("/taste");
  }, [router.isReady]);
}
