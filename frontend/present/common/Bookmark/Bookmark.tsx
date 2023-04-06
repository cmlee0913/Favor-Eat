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

function Bookmark() {
  //recipeFavorChecked -> 이미 좋아요를 했는지
  const [recipeFavorChecked, setRecipeFavorChecked] = useAtom(
    recipeFavorCheckedAtom,
  );
  const router = useRouter();
  const idx = router.query.pid;
  const [token] = useAtom(userTokenSave);

  const bookMarkHandler = () => {
    if (!token.accessToken) return;
    if (!recipeFavorChecked) {
      saveFoodFavor(token.accessToken, idx);
      setRecipeFavorChecked(true);
    } else {
      deleteFoodFavor(token.accessToken, idx);
      setRecipeFavorChecked(false);
    }
  };

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
