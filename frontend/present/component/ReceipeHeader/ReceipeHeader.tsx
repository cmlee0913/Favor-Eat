import Image from "next/image";
import React from "react";
import * as style from "./ReceipeHeader.style";

import Thumb from "@/assets/icon/Thumb.png"
import ThumbFill from "@/assets/icon/ThumbFill.png"
import { ReceipeHeaderProps } from "@/types/Receipe/dummy";

export default function ReceipeHeader({selectIdx}:ReceipeHeaderProps) {
  return <style.Container selectIdx={selectIdx}>
    <h2>
      <span>음식 이름</span>

      {/* 음식 호불호 */}
      <span>
        <Image src={Thumb} alt={"bookmark"} />
        <Image src={Thumb} alt={"nosuggestion"} />
      </span>
    </h2>

    {/* 소요시간, 난이도 */}
    <style.Info>
      <div>
        <span>난이도</span>
        <span>신의 경지</span>
      </div>

      <div>
        <span>소요시간</span>
        <span>10분</span>
      </div>
    </style.Info>
  </style.Container>;
}
