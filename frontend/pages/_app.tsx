import Header from "@/present/layout/Header/Header";
import { Provider } from "jotai";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../constant/font.css";

import CustomCursor from "@/present/common/CustomCursor/CustomCursor";
import ModalCompo from "@/present/component/ModalCompo/ModalCompo";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter().pathname;

  console.log(router);

  return (
    <Provider>
      {router == "/main" ||
      router == "/myPage" ||
      router == "/info" ||
      router == "/alarm" ||
      // router.includes("diary") ||
      router.includes("recipe") ? (
        <Header />
      ) : null}
      <CustomCursor />
      <Component {...pageProps} />
      <ModalCompo />
    </Provider>
  );
}
