import Header from "@/present/layout/Header/Header";
import { Provider } from "jotai";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../constant/font.css";

import CustomCursor from "@/present/common/CustomCursor/CustomCursor";
import ModalCompo from "@/present/component/ModalCompo/ModalCompo";
import { useState } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter().pathname;
  const isDiary = router === "/diary/[pid]" ? true : false;

  return (
    <Provider>
      {router == "/main" ||
      router == "/myPage" ||
      router == "/info" ||
      router == "/alarm" ||
      router == "/favorite" ||
      router.includes("diary") ||
      router.includes("recipe") ? (
        <Header isDiary={isDiary} />
      ) : null}
      <CustomCursor />
      <Component {...pageProps} />
      <ModalCompo />
    </Provider>
  );
}
