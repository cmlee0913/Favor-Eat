import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAtom } from "jotai";
import { userDataSave, userTokenSave } from "@/store/userStore";

const parseJwt = (token: string) => {
  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );

  return JSON.parse(jsonPayload);
};

const getIndexingOrValue = (value: string | string[]): string =>
  typeof value === "string" ? value : value[0];

export default function SocialLogin() {
  const router = useRouter();
  const [, setUserData] = useAtom(userDataSave);
  const [, setUserToken] = useAtom(userTokenSave);

  useEffect(() => {
    if (!router.isReady) return;

    let { token } = router.query;
    token = getIndexingOrValue(token);

    if (token) {
      const decodedJson = parseJwt(token);

      const { role, email, nickname } = decodedJson;

      setUserData({
        nickname: nickname,
        email: email,
        role: role,
      });
      setUserToken({
        accessToken: token,
        refreshToken: "",
      });

      if (role === "USER") {
        router.replace("/main");
      } else if (role === "GUEST") {
        router.replace("/taste");
      }
    }
  }, [router.isReady]);
}
