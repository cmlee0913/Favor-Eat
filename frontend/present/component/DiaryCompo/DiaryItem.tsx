import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import * as style from "./DiaryCompo.style";

import Emotion1 from "@/assets/image/Emotion/emotion1.png";
import Emotion2 from "@/assets/image/Emotion/emotion2.png";
import Emotion3 from "@/assets/image/Emotion/emotion3.png";
import Emotion4 from "@/assets/image/Emotion/emotion4.png";
import Emotion5 from "@/assets/image/Emotion/emotion5.png";

const emotionImages = [0, Emotion1, Emotion2, Emotion3, Emotion4, Emotion5];

const DiaryItem = ({ id, title, emotion, content, registedDate }) => {
  const router = useRouter();
  const strDate = new Date(parseInt(registedDate)).toLocaleDateString();

  const goDetail = () => {
    router.push(`/diary/${id}`);
  };

  const goEdit = () => {
    router.push(`/diary/edit/${id}`);
  };

  return (
    <style.DiaryItemContainer>
      <style.DiaryImageWrapper>
        {/* <Image src={emotionImages[emotion]} alt="emotion" onClick={goDetail} /> */}
      </style.DiaryImageWrapper>
      <style.DiaryContentWrapper onClick={goDetail}>
        <div>{strDate}</div>
        <div>{title}</div>
        <div>{content?.slice(0, 25)}</div>
      </style.DiaryContentWrapper>

      <style.DiaryButtonWrapper>
        <style.DiaryButton onClick={goEdit}>수정하기</style.DiaryButton>
      </style.DiaryButtonWrapper>
    </style.DiaryItemContainer>
  );
};

export default React.memo(DiaryItem);
