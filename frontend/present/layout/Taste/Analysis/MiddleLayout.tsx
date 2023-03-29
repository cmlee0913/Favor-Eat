import { useState } from "react";

import * as style from "./AnalysisLayout.style";
import LikeButton from "@/assets/icon/LikeButton.svg";
import HateButton from "@/assets/icon/HateButton.svg";
import TasteFoodCardCompo from "@/present/component/TasteFoodCardCompo/TasteFoodCardCompo";
import { MiddleLayoutProps } from "@/types/Taste/dummy";
import TasteEvaluateBoxCompo from "@/present/component/TasteEvaluateCompo/TatseEvaluateBoxCompo";
import { currentIndexAtom, currentRecipeDataAtom } from "@/store/tasteStore";
import { useAtom } from "jotai";

export default function MiddleLayout({ canGoMain }: MiddleLayoutProps) {
  const [buttonShow, setButtonShow] = useState(true);

  const [currentRecipeData] = useAtom(currentRecipeDataAtom);
  const [, setCurrentIndex] = useAtom(currentIndexAtom);

  const onClickHate = () => {
    setCurrentIndex((current) => current + 1);
  };

  return (
    <style.MiddleContainer>
      <style.CardContainer editable={buttonShow}>
        <style.Button show={buttonShow} onClick={() => setButtonShow(false)}>
          <LikeButton />
          <div>좋아요</div>
        </style.Button>
        {/* 음식 사진 */}
        <TasteFoodCardCompo recipeData={currentRecipeData} />
        {/* rating */}
        <style.EvaluateBoxWrapper editable={buttonShow}>
          <TasteEvaluateBoxCompo
            canGoMain={canGoMain}
            recipeData={currentRecipeData}
            buttonActive={setButtonShow}
          />
        </style.EvaluateBoxWrapper>
        <style.Button show={buttonShow} onClick={() => onClickHate()}>
          <HateButton />
          <div>싫어요</div>
        </style.Button>
      </style.CardContainer>
    </style.MiddleContainer>
  );
}
