import Header from "@/present/layout/Header/Header";
import { Provider } from "jotai";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import '../constant/font.css'

import { useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter().pathname;

  console.log(router);

  const firebaseConfig = {
    apiKey: "AIzaSyBkvLz36_zD93UwXx4wf8P101EeX1pDLyQ",
    authDomain: "test-pwa-7907d.firebaseapp.com",
    projectId: "test-pwa-7907d",
    storageBucket: "test-pwa-7907d.appspot.com",
    messagingSenderId: "11003173258",
    appId: "1:11003173258:web:c4468671141151e5141073",
    measurementId: "G-H66VD1BMY3",
  };

  useEffect(() => {
    const onMessageFCM = async () => {
      // 브라우저에 알림 권한을 요청합니다.
      const permission = await Notification.requestPermission();
      if (permission !== "granted") return;

      // Firebase 앱 인스턴스를 생성합니다.
      const firebaseApp = initializeApp(firebaseConfig);

      // Firebase Cloud Messaging 인스턴스를 생성합니다.
      const messaging = getMessaging(firebaseApp);

      // 인증서 키를 설정합니다.
      const vapidKey =
        "BBmsINcSMQVkwjV0vncMSWz37t9l0ckye4rlOlwWDvONtHXX97k-VFFJUf6Sgukq5X9E2OFTQpP0De-_2rw72Yg";

      // Firebase Cloud Messaging에서 사용할 수 있는 토큰을 가져옵니다.
      getToken(messaging, { vapidKey })
        .then((currentToken) => {
          if (currentToken) {
            // 정상적으로 토큰이 발급되면 콘솔에 출력합니다.
            console.log(currentToken);
          } else {
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });

      // Firebase Cloud Messaging에서 메세지를 수신합니다.
      onMessage(messaging, (payload) => {
        console.log("Message received. ", payload);
      });
    };

    onMessageFCM();
  }, []);

  return (
    <Provider>
      {router == "/main" ||
      router == "/myPage" ||
      router == "/info" ||
      router == "/alarm" ||
      router.includes("diary") ||
      router.includes("recipe") ? (
        <Header />
      ) : null}
      <Component {...pageProps} />
    </Provider>
  );
}
