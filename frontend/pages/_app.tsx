import Header from "@/present/layout/Header/Header";
import { Provider } from "jotai";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter().pathname;

  return (
    <Provider>
      {router == "/main" ||
      router == "/myPage" ||
      router == "/info" ||
      router == "/alarm" ||
      router.includes("recipe") ? (
        <Header />
      ) : null}
      <Component {...pageProps} />
    </Provider>
  );
}
