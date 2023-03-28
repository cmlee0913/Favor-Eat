import React from "react";
import * as style from "./Guide.style";
import Image from "next/image";
import useScrollMoveDown from "@/action/hooks/useScrollMoveDown";

import Pink1 from "@/assets/image/GuideCloud/Pink1.png";
import Pink2 from "@/assets/image/GuideCloud/Pink2.png";

import Food1 from "@/assets/image/Guide/GuideSuggest1.png";
import Food2 from "@/assets/image/Guide/GuideSuggest2.png";
import Food3 from "@/assets/image/Guide/GuideSuggest3.png";
import Food4 from "@/assets/image/Guide/GuideSuggest4.png";

export default function SuggestLayout() {
  const foodArr = [Food1, Food2, Food3, Food4];

  const imgArr = foodArr.map((elem, idx) => {
    const scrollAnimation = useScrollMoveDown(1, 3 - idx);
    return (
      <Image
        className="SampleImg"
        src={elem}
        key={idx}
        alt="SampleImage"
        {...scrollAnimation}
      />
    );
  });

  return (
    <style.Container className="Pink Suggest">
      {/* 텍스트 */}
      <style.SampleTest className="Suggest">
        <h1>오늘의 음식을<br />추천받아보세요</h1>
        <p>당신의 입맛에 맞는 음식을 추천해드려요</p>
      </style.SampleTest>

      {/* 이미지 */}
      <style.SampleImg>{imgArr}</style.SampleImg>

      {/* 구름 */}
      <style.Cloud>
        <Image className="Cloud Suggest Reverse" src={Pink1} alt="Cloud" />
        <Image className="Cloud Suggest" src={Pink2} alt="Cloud" />
      </style.Cloud>
    </style.Container>
  );
}
