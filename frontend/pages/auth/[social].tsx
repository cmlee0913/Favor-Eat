import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAtom } from "jotai";
import { getUserDataByToken, userTokenSave } from "@/store/userStore";

const getIndexingOrValue = (value: string | string[]): string =>
  typeof value === "string" ? value : value[0];

export default function SocialLogin() {
  const router = useRouter();
  const [, setUserToken] = useAtom(userTokenSave);

  useEffect(() => {
    if (!router.isReady) return;

    let { access, refresh } = router.query;
    access = getIndexingOrValue(access);
    refresh = getIndexingOrValue(refresh);

    if (access) {
      const { role } = getUserDataByToken(access);

      setUserToken({
        accessToken: access,
        refreshToken: refresh,
      });

      if (role === "USER") {
        router.replace("/main");
      } else if (role === "GUEST") {
        router.replace("/taste/choose");
      }
    }
  }, [router.isReady]);
}
