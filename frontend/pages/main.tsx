import React, { useState } from "react";
import Image from "next/image";

import { logoutAsync } from "@/action/apis/auth";
import { useRouter } from "next/router";
import { userTokenSave } from "@/store/userStore";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";

import * as style from "@/present/layout/Main/MainLayout.style";
import LeftLayout from "@/present/layout/Main/LeftLayout";
import CharactersImage from "@/assets/image/Character/MainPage.png";
import { MobileRecipeCompo } from "@/present/component/MobileRecipeCompo/MobileRecipeCompo";
import { MainFoodListType } from "@/types/Main/dummy";

export default function Home() {
  const foodList: Array<MainFoodListType> = [
    {
      foodName: "떡볶이",
      imgSrc:
        "https://cdn.pixabay.com/photo/2017/07/27/16/48/toppokki-2545943_960_720.jpg",
      recipeId: 0,
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
      recipeId: 1,
      flavor: { type: "spicy", value: 2.1 },
      contents: [
        { key: "레시피 난이도", value: "아무나" },
        { key: "소요시간", value: "20분 이내" },
      ],
    },
    {
      foodName: "비빔밥",
      imgSrc:
        "https://cdn.pixabay.com/photo/2016/10/13/19/15/bibimbap-1738580_960_720.jpg",
      recipeId: 1,
      flavor: { type: "salty", value: 3 },
      contents: [
        { key: "레시피 난이도", value: "중급" },
        { key: "소요시간", value: "1시간 이내" },
      ],
    },
    {
      foodName: "날치알 주먹밥",
      imgSrc:
        "https://cdn.pixabay.com/photo/2019/09/30/03/07/al-rice-4514717_960_720.jpg",
      recipeId: 1,
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
      <style.MobileImageContainer>
        <div>
          {foodList.map((item, index) => (
            <MobileRecipeCompo
              key={index}
              imgSrc={item.imgSrc}
              foodName={item?.foodName}
              flavorType={item?.flavor.type}
              flavorValue={item?.flavor.value}
              recipeId={item?.recipeId}
            />
          ))}
        </div>
      </style.MobileImageContainer>
    </style.Container>
  );
}
