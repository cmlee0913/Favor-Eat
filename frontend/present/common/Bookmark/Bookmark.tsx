import React, { memo, useEffect, useState } from "react";
import * as style from "./Bookmark.style";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { deleteAsync, postAsync } from "@/action/apis/apis";
import { apiURL } from "@/store/constants";
import { userTokenSave } from "@/store/userStore";
import { useAtom } from "jotai";

import Thumb from "@/assets/icon/Thumb.png";
import ThumbFill from "@/assets/icon/ThumbFill.png";

function Bookmark() {
  const [check, setCheck] = useState(false);
  const idx = useRouter().query.pid;
  const [token] = useAtom(userTokenSave);

  const bookMarkHandler = () => {
    setCheck(!check);
  };

  useEffect(() => {
    const url = apiURL + `/foods/favor/${idx}`;
    
    // 토큰이 있다면
    if (token.accessToken !== null) {
      if (check) {
        // 즐겨찾기 추가
        postAsync(
          url,
          {},
          {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          }
        );
      } else {
        // 즐겨찾기 해제
        deleteAsync(url, {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        });
      }
    }
  }, [check]);

  return (
    <style.Container onClick={bookMarkHandler}>
      {check ? (
        <Image src={ThumbFill} alt={"좋아요 한 레시피입니다"} />
      ) : (
        <Image src={Thumb} alt={"이 레시피 좋아요"} />
      )}
    </style.Container>
  );
}

export default memo(Bookmark);
