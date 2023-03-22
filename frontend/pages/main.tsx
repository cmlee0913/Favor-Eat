import React from "react";
import { logoutAsync } from "@/action/apis/auth";
import { useRouter } from "next/router";
import { userDataSave, userTokenSave } from "@/store/userStore";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";
import { GlobalStyle } from "@/action/GlobalStyle";
import MainLayout from "@/present/layout/Main/MainLayout";
import Header from "@/present/layout/Header/Header";

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

  const foodList = [
    {
      foodName: "떡볶이",
      imgSrc:
        "https://cdn.pixabay.com/photo/2017/07/27/16/48/toppokki-2545943_960_720.jpg",
      flavor: { type: "spicy", value: 4.2 },
      contents: [
        { key: "레시피 난이도", value: "신의 경지" },
        { key: "소요시간", value: "30분 이내" },
      ],
    },
    {
      foodName: "달걀조림",
      imgSrc:
        "https://recipe1.ezmember.co.kr/cache/recipe/2019/07/01/097a119634a9657ee34d81b011a97b131.jpg",
      flavor: { type: "spicy", value: 2.1 },
      contents: [
        { key: "레시피 난이도", value: "아무나" },
        { key: "소요시간", value: "20분 이내" },
      ],
    },
    {
      foodName: "비빔밥",
      imgSrc:
        "https://i.pinimg.com/564x/b3/7f/cb/b37fcb05b9315e279b7e824af8e74f18.jpg",
      flavor: { type: "spicy", value: 2.1 },
      contents: [
        { key: "레시피 난이도", value: "아무나" },
        { key: "소요시간", value: "20분 이내" },
      ],
    },
    {
      foodName: "날치알 주먹밥",
      imgSrc:
        "https://cdn.pixabay.com/photo/2019/09/30/03/07/al-rice-4514717_960_720.jpg",
      flavor: { type: "sweet", value: 2.5 },
      contents: [
        { key: "레시피 난이도", value: "아무나" },
        { key: "소요시간", value: "10분 이내" },
      ],
    },
  ];

  console.log("test");

  return (
    <div>
      <GlobalStyle />
      <Header />
      <MainLayout foods={foodList} />
    </div>
  );
}
