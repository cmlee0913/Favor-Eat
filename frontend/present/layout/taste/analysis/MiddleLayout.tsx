import * as style from "./AnalysisLayout.style";
import LikeButton from "@/assets/icon/LikeButton.svg";
import HateButton from "@/assets/icon/HateButton.svg";
import TasteFoodCardCompo from "@/present/component/TasteFoodCardCompo/TasteFoodCardCompo";
import { MiddleLayoutProps } from "@/types/Taste/dummy";
import TasteEvaluateBoxCompo from "@/present/component/TasteEvaluateCompo/TatseEvaluateBoxCompo";

export default function MiddleLayout({
  buttonShow,
  changeShowMode,
}: MiddleLayoutProps) {
  const onClickButton = () => {
    changeShowMode(false);
  };
  return (
    <style.MiddleContainer>
      <style.CardContainer editable={buttonShow}>
        <style.Button show={buttonShow} onClick={onClickButton}>
          <LikeButton />
          <div>좋아요</div>
        </style.Button>
        <TasteFoodCardCompo />
        {buttonShow ? null : <TasteEvaluateBoxCompo />}
        <style.Button show={buttonShow}>
          <HateButton />
          <div>싫어요</div>
        </style.Button>
      </style.CardContainer>
    </style.MiddleContainer>
  );
}
