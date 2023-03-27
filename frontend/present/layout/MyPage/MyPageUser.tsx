import React from "react";
import * as style from "./MyPage.style";

import Image from "next/image";

import Spicy from "@/assets/image/Character/Spicy.png";
import Sweet from "@/assets/image/Character/Sweet.png";
import Salty from "@/assets/image/Character/Salty.png";
import Oily from "@/assets/image/Character/Oily.png";

import MyPageFlavorData from "./MyPageFlavorData";
import { FlavorStaticData } from "@/types/MyPage/dummy";

import LeftTitleBox from "@/present/common/TitleBox/LeftTitleBox/LeftTitleBox";

export default function MyPageUser() {
  const user = { username: "뭐뭐" };

  const flavorStaticData: Array<FlavorStaticData> = [
    {
      type: "spicy",
      title: "매워요",
      subtitle: "맵기",
      img: Spicy,
      value: 1,
    },
    {
      type: "sweet",
      title: "달아요",
      subtitle: "달기",
      img: Sweet,
      value: 2,
    },
    {
      type: "salty",
      title: "짜요",
      subtitle: "짜기",
      img: Salty,
      value: 3,
    },
    {
      type: "oily",
      title: "기름져요",
      subtitle: "기름지기",
      img: Oily,
      value: 4,
    },
  ];

  // const flavorList = [];

  return (
    <style.MyPageUser>
      <LeftTitleBox
        title={`안녕하세요. ${user.username}님`}
        subtitle="이런 맛을 좋아하셨어요"
      />

      {flavorStaticData.map((item, index) => (
        <MyPageFlavorData key={index} {...item} />
      ))}
    </style.MyPageUser>
  );
}
