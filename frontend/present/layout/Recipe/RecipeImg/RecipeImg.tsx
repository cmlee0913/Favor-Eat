import React from "react";
import * as style from "./RecipeImg.style";
import Image from "next/image";

import { RecipeImgProps } from "@/types/Recipe/dummy";

export default function RecipeImg({ mainImg, subImg }: RecipeImgProps) {
  const subImgArr = subImg.map((elem: any, idx: number) => {
    return <Image className="subImg" src={elem} alt="subImage" key={idx} />;
  });

  return (
    <style.Container>
      <Image id="mainImg" src={mainImg} alt="mainImage" />

      <h3>이런 메뉴와 비슷해요</h3>
      <style.ImgContainer>{subImgArr}</style.ImgContainer>
    </style.Container>
  );
}
