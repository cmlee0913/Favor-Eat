import { useState } from "react";

import * as style from "./AnalysisLayout.style";
import LikeButton from "@/assets/icon/LikeButton.svg";
import HateButton from "@/assets/icon/HateButton.svg";
import TasteFoodCardCompo from "@/present/component/TasteFoodCardCompo/TasteFoodCardCompo";
import { MiddleLayoutProps } from "@/types/Taste/dummy";
import TasteEvaluateBoxCompo from "@/present/component/TasteEvaluateCompo/TatseEvaluateBoxCompo";
import useMediaQuery from "@/action/hooks/useMediaQuery";

export default function MiddleLayout({
  recipeData,
  count,
  clickHate,
  clickNext,
}: MiddleLayoutProps) {
  const [buttonShow, setButtonShow] = useState(true);
  const isTablet = useMediaQuery("(min-width: 769px)");
  const isMobile = useMediaQuery("(min-width: 426px)");

  const onClickNext = () => {
    clickNext();
    setButtonShow(true);
  };

  return (
    <style.MiddleContainer>
      <style.CardContainer editable={buttonShow}>
        <style.Button show={buttonShow} onClick={() => setButtonShow(false)}>
          <LikeButton />
          <div>좋아요</div>
        </style.Button>
        {/* 음식 사진 */}
        <TasteFoodCardCompo recipeData={recipeData} />
        {/* rating */}
        <style.EvaluateBoxWrapper editable={buttonShow}>
          <TasteEvaluateBoxCompo
            recipeName={recipeData.recipeName ?? ""}
            recipeId={recipeData?.recipeId ?? -1}
            resetButtonShow={onClickNext}
            imgSrc={recipeData?.imageSrc ?? ""}
          />
        </style.EvaluateBoxWrapper>
        <style.Button show={buttonShow} onClick={() => clickHate()}>
          <HateButton />
          <div>싫어요</div>
        </style.Button>
      </style.CardContainer>
    </style.MiddleContainer>
  );
}
