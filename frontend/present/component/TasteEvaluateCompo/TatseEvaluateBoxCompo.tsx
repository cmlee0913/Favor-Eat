import TasteRatingCompo from "../TasteRatingCompo/TasteRatingCompo";
import * as style from "./TatseEvaluateBoxCompo.style";

export default function TasteEvaluateBoxCompo() {
  return (
    <style.Container>
      <style.Header>
        <div>맛 평가하기</div>
      </style.Header>
      <>
        <TasteRatingCompo type={"spicy"} />
        <TasteRatingCompo type={"sweet"} />
        <TasteRatingCompo type={"salty"} />
        <TasteRatingCompo type={"oily"} />
      </>
    </style.Container>
  );
}
