import React from "react";
import Image from "next/image";
import MyButton from "./MyButton";
import { useRouter } from "next/router";
import * as style from "./DiaryCompo.style";

import Emotion1 from "@/assets/image/Emotion/emotion1.png";
import Emotion2 from "@/assets/image/Emotion/emotion2.png";
import Emotion3 from "@/assets/image/Emotion/emotion3.png";
import Emotion4 from "@/assets/image/Emotion/emotion4.png";
import Emotion5 from "@/assets/image/Emotion/emotion5.png";

const DiaryItem = ({ id, emotion, content, date, onClick }) => {
  const router = useRouter();
  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetail = () => {
    router.push(`/diary/${id}`);
  };

  const goEdit = () => {};

  let emotionImage = Emotion1;
  switch (emotion) {
    case 1:
      emotionImage = Emotion1;
      break;
    case 2:
      emotionImage = Emotion2;
      break;
    case 3:
      emotionImage = Emotion3;
      break;
    case 4:
      emotionImage = Emotion4;
      break;
    case 5:
      emotionImage = Emotion5;
      break;
  }

  return (
    <style.DiaryItemContainer>
      <div onClick={goDetail}>
        <Image width={"50"} height={"50"} src={emotionImage} alt="emotion" />
      </div>
      <div onClick={goDetail}>
        <div>{strDate}</div>
        <div>{content.slice(0, 25)}</div>
      </div>
      <style.Button onClick={goEdit}>수정하기</style.Button>
    </style.DiaryItemContainer>
  );
};

export default React.memo(DiaryItem);
