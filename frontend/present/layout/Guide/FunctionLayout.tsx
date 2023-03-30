import React from "react";
import * as style from "./Guide.style";
import Image from "next/image";
import useScrollMoveDown from "@/action/hooks/useScrollMoveDown";

import Pink1 from "@/assets/image/GuideCloud/Pink1.png";
import Pink2 from "@/assets/image/GuideCloud/Pink2.png";

import EndCloudPink from "@/assets/image/GuideCloud/PinkCloud.png";

import Food1 from "@/assets/image/Guide/GroupFunction1.png";
import Food2 from "@/assets/image/Guide/GroupFunction2.png";
import Food3 from "@/assets/image/Guide/GroupFunction3.png";
import Food4 from "@/assets/image/Guide/GroupFunction4.png";
import Food5 from "@/assets/image/Guide/GroupFunction5.png";

export default function FunctionLayout() {
  const foodArr = [Food1, Food2, Food3, Food4, Food5];

  const imgArr = foodArr.map((elem, idx) => {
    const scrollAnimation = useScrollMoveDown(1, idx);
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
    <style.Container className="Pink">
      {/* 텍스트 */}
      <style.SampleTest className="Function">
        <h1>
          추천받은 음식의
          <br />
          정보를 확인하세요
        </h1>
        <p className="PC">맵기, 짜기, 영양소 등 다양한 정보를 확인할 수 있어요</p>
        <p className="Mobile">맵기, 짜기, 영양소 등<br />다양한 정보를 확인할 수 있어요</p>
      </style.SampleTest>

      {/* 이미지 */}
      <style.FunctionImg>{imgArr}</style.FunctionImg>

      {/* 구름 */}
      <style.Cloud>
        <Image className="Cloud Function" src={Pink1} alt="Cloud" />
        <Image className="Cloud Function Reverse" src={Pink2} alt="Cloud" />
        <Image className="EndPoint" src={EndCloudPink} alt="Layout EndPoint" />
      </style.Cloud>
    </style.Container>
  );
}
