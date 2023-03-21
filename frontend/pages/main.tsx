import React from "react";
import { logoutAsync } from "@/action/apis/auth";
import { useRouter } from "next/router";
import { userDataSave, userTokenSave } from "@/store/userStore";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";

export default function Home() {
  const router = useRouter();
  const [, setUserData] = useAtom(userDataSave);
  const [token, setUserToken] = useAtom(userTokenSave);

  const logout = async () => {
    if (!token.accessToken) return;

    const logoutResult = await logoutAsync(token.accessToken);

    if (logoutResult.isSuccess) {
      setUserData(RESET);
      setUserToken(RESET);
      router.replace("/guide");
    }
  };

  return (
    <div>
      Main
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}
