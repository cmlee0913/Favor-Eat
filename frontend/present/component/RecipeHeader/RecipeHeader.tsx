import Image from "next/image";
import React from "react";
import * as style from "./RecipeHeader.style";

import Thumb from "@/assets/icon/Thumb.png";
import { RecipeHeaderProps } from "@/types/Recipe/dummy";
import Bookmark from "@/present/common/Bookmark/Bookmark";
import { saveFoodNonFavor } from "@/action/apis/recipeFavor";
import { useAtom } from "jotai";
import { userTokenSave } from "@/store/userStore";
import { useRouter } from "next/router";

export default function RecipeHeader({ selectIdx, name, level,time }: RecipeHeaderProps) {
  const [token] = useAtom(userTokenSave);
  const router = useRouter();
  const idx = useRouter().query.pid;

  const onClickNoFavor = async () => {
    if (!token || !router.isReady) return;
    saveFoodNonFavor(token.accessToken, idx);
  };
  return (
    <style.Container selectIdx={selectIdx}>
      <h2>
        <span>{name}</span>

        {/* 음식 호불호 */}
        <span>
          <Bookmark />
          <Image
            className="no-suggest"
            src={Thumb}
            alt={"nosuggestion"}
            onClick={onClickNoFavor}
          />
        </span>
      </h2>

      {/* 소요시간, 난이도 */}
      <style.Info>
        <div>
          <span>난이도</span>
          <span>{level}</span>
        </div>

        <div>
          <span>소요시간</span>
          <span>{time}</span>
        </div>
      </style.Info>
    </style.Container>
  );
}
