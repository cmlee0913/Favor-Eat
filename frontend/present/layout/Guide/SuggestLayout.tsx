import React from "react";
import * as style from "./Guide.style";
import Image from "next/image";

import Pink1 from "@/assets/image/GuideCloud/Pink1.png";
import Pink2 from "@/assets/image/GuideCloud/Pink2.png";

import Food1 from "@/assets/image/FoodPhoto/Food1.jpg";
import Food2 from "@/assets/image/FoodPhoto/Food2.jpg";
import Food3 from "@/assets/image/FoodPhoto/Food3.jpg";
import Food4 from "@/assets/image/FoodPhoto/Food4.jpg";

export default function SuggestLayout({
  picPos,
  viewHeight,
}: {
  picPos: number;
  viewHeight: number;
}) {
  const foodArr = [Food1, Food2, Food3, Food4];

  const imgArr = foodArr.map((elem, idx) => {
    return (
      <Image className="SampleImg" src={elem} key={idx} alt="SampleImage" />
    );
  });

  return (
    <style.Container className="Pink">
      <style.SampleImg picPos={picPos}>
        {picPos > viewHeight/6 && imgArr}
      </style.SampleImg>

      {/* 구름 */}
      <style.Cloud>
        <Image className="Cloud Suggest Reverse" src={Pink1} alt="Cloud" />
        <Image className="Cloud Suggest" src={Pink2} alt="Cloud" />
      </style.Cloud>
    </style.Container>
  );
}
