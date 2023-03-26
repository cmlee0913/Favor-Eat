import Header from "@/present/layout/Header/Header";
import { Provider } from "jotai";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter().pathname;

  console.log(router);

  return (
    <Provider>
      {router === "/guide" || router.includes("taste") ? null : <Header />}
      <Component {...pageProps} />
    </Provider>
  );
}
