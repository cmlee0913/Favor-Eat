import Image from "next/image";
import React from "react";
import * as style from "./RecipeHeader.style";

import Thumb from "@/assets/icon/Thumb.png";
import { RecipeHeaderProps } from "@/types/Recipe/dummy";
import Bookmark from "@/present/common/Bookmark/Bookmark";

export default function RecipeHeader({ selectIdx }: RecipeHeaderProps) {
  return (
    <style.Container selectIdx={selectIdx}>
      <h2>
        <span>음식 이름</span>

        {/* 음식 호불호 */}
        <span>
          <Bookmark />
          <Image className="no-suggest" src={Thumb} alt={"nosuggestion"} />
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
    </style.Container>
  );
}
