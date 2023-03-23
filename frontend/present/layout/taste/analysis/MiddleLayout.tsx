import * as style from "./AnalysisLayout.style";
import LikeButton from "@/assets/icon/LikeButton.svg";
import HateButton from "@/assets/icon/HateButton.svg";
import TasteFoodCardCompo from "@/present/component/TasteFoodCardCompo/TasteFoodCardCompo";

export default function MiddleLayout() {
  return (
    <>
      <style.MiddleContainer>
        <style.Button>
          <LikeButton />
          <div>좋아요</div>
        </style.Button>
        <TasteFoodCardCompo />
        <style.Button>
          <HateButton />
          <div>싫어요</div>
        </style.Button>
      </style.MiddleContainer>
    </>
  );
}
