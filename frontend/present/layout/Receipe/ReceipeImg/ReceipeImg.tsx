import React from "react";
import * as style from "./ReceipeImg.style";
import Image from "next/image";

import { ReceipeImgProps } from "@/types/Receipe/dummy";

export default function ReceipeImg({ mainImg, subImg }: ReceipeImgProps) {
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
