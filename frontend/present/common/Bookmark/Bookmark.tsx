import React, { memo, useState } from "react";
import * as style from "./Bookmark.style";
import Image from "next/legacy/image";

import Thumb from "@/assets/icon/Thumb.png";
import ThumbFill from "@/assets/icon/ThumbFill.png";

function Bookmark() {
  const [check, setCheck] = useState(false);

  const bookMarkHandler = () => {
    setCheck(!check)
  }

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
