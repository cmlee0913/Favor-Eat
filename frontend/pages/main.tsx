import React, { useState } from "react";
import Image from "next/image";

import { logoutAsync } from "@/action/apis/auth";
import { useRouter } from "next/router";
import { userDataSave, userTokenSave } from "@/store/userStore";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";

import * as style from "@/present/layout/Main/MainLayout.style";
import LeftLayout from "@/present/layout/Main/LeftLayout";
import CharactersImage from "@/assets/image/Character/MainPage.png";

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
      foodName: "스테이크",
      imgSrc:
        "https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_960_720.jpg",
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

  const [isMainMode, setIsMainMode] = useState<boolean>(true);

  return (
    <style.Container>
      <style.RefreshButton />
      <LeftLayout foods={foodList}></LeftLayout>
      <style.Right>
        <style.Slogan>
          Life is short,
          <br /> Eat this first.
        </style.Slogan>
        <style.CharacterImage>
          <Image
            src={CharactersImage}
            width={400}
            alt="characters search for food"
          />
        </style.CharacterImage>
        <style.RecommendIcons>
          <style.MainRecommendActive />
          <style.AnotherRecommendInactive />
        </style.RecommendIcons>
      </style.Right>
    </style.Container>
  );
}
