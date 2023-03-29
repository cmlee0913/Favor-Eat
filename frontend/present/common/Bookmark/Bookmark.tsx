import React, { memo, useEffect, useState } from "react";
import * as style from "./Bookmark.style";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { userTokenSave } from "@/store/userStore";
import { useAtom } from "jotai";

import Thumb from "@/assets/icon/Thumb.png";
import ThumbFill from "@/assets/icon/ThumbFill.png";
import { deleteFoodFavor, saveFoodFavor } from "@/action/apis/recipeFavor";
import { recipeFavorCheckedAtom } from "@/store/recipeDetail";

//checked -> 이미 좋아요를 했는지
function Bookmark() {
  const [recipeFavorChecked, setRecipeFavorChecked] = useAtom(
    recipeFavorCheckedAtom,
  );
  const idx = useRouter().query.pid;
  const [token] = useAtom(userTokenSave);

  const bookMarkHandler = () => {
    setRecipeFavorChecked((current) => !current);
  };

  useEffect(() => {
    if (!token.accessToken) return;

    // 토큰이 있다면
    if (recipeFavorChecked) {
      // 즐겨찾기 추가
      saveFoodFavor(token.accessToken, idx);
      return;
    }
    // 즐겨찾기 해제
    deleteFoodFavor(token.accessToken, idx);
  }, [recipeFavorChecked]);

  return (
    <style.Container onClick={bookMarkHandler}>
      {recipeFavorChecked ? (
        <Image src={ThumbFill} alt={"좋아요 한 레시피입니다"} />
      ) : (
        <Image src={Thumb} alt={"이 레시피 좋아요"} />
      )}
    </style.Container>
  );
}

export default memo(Bookmark);
