import React, { memo, useEffect, useState } from "react";
import * as style from "./Bookmark.style";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { postAsync } from "@/action/apis/apis";
import { apiURL } from "@/store/constants";

import Thumb from "@/assets/icon/Thumb.png";
import ThumbFill from "@/assets/icon/ThumbFill.png";

function Bookmark() {
  const [check, setCheck] = useState(false);
  const idx = useRouter().query.pid;

  const bookMarkHandler = () => {
    setCheck(!check);
  };

  useEffect(() => {
    if (check) {
      // const url = apiURL + `/foods/favor/${idx}`
      // postAsync(url);
    } else {
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
