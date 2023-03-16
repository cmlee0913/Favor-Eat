import React from "react";
import { logoutAsync } from "@/action/apis/auth";
import { ACCESS_TOKEN } from "@/store/constants";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const logout = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const logoutResult = await logoutAsync(token);

    if (logoutResult.isSuccess) {
      localStorage.removeItem(ACCESS_TOKEN);
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
