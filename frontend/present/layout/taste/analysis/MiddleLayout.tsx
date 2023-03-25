import { useState } from "react";

import * as style from "./AnalysisLayout.style";
import LikeButton from "@/assets/icon/LikeButton.svg";
import HateButton from "@/assets/icon/HateButton.svg";
import TasteFoodCardCompo from "@/present/component/TasteFoodCardCompo/TasteFoodCardCompo";
import { MiddleLayoutProps } from "@/types/Taste/dummy";
import TasteEvaluateBoxCompo from "@/present/component/TasteEvaluateCompo/TatseEvaluateBoxCompo";

export default function MiddleLayout({
  buttonShow,
  changeShowMode,
  count,
  setCount,
}: MiddleLayoutProps) {
  const onClickButton = () => {
    changeShowMode(false);
  };
  const showNextFood = () => {
    changeShowMode(true);
    setFoodIndex((current) => current + 1);
    setCount((current) => current + 1);
  };
  const [foodIndex, setFoodIndex] = useState(0);

  return (
    <style.MiddleContainer>
      <style.CardContainer editable={buttonShow}>
        <style.Button show={buttonShow} onClick={onClickButton}>
          <LikeButton />
          <div>좋아요</div>
        </style.Button>
        {/* 음식 사진 */}
        <TasteFoodCardCompo />
        {/* rating */}
        <style.EvaluateBoxWrapper editable={buttonShow}>
          <TasteEvaluateBoxCompo
            foodIndex={foodIndex}
            resetButtonShow={showNextFood}
          />
        </style.EvaluateBoxWrapper>
        <style.Button show={buttonShow}>
          <HateButton />
          <div>싫어요</div>
        </style.Button>
      </style.CardContainer>
    </style.MiddleContainer>
  );
}
