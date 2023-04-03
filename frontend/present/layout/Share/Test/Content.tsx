import { foodIndexAtom, likedCountAtom } from "@/store/shareTasteStore";
import { ContentPageLayoutProps } from "@/types/Share/Test/dummy";
import { useSetAtom } from "jotai";
import Image from "next/image";
import * as style from "./Content.style";

export default function Content({
  pageNum,
  maxPageNum,
  foodData,
  selectedCharacter,
}: ContentPageLayoutProps) {
  const percentage = (pageNum / maxPageNum) * 100;
  const setLikedCount = useSetAtom(likedCountAtom);
  const setFoodIndex = useSetAtom(foodIndexAtom);

  const onClickLike = () => {
    setLikedCount((current) => current + 1);
    setFoodIndex((current) => current + 1);
  };

  const onClickHate = () => {
    setFoodIndex((current) => current + 1);
  };

  return (
    <>
      <style.Container>
        <style.Page>
          <span>{pageNum}</span>/{maxPageNum}
        </style.Page>
        <style.FoodContainer>
          <style.FoodTitle>{foodData?.foodTitle}</style.FoodTitle>
          <style.FoodImage>
            {foodData?.imageList.map((image) => (
              <Image src={image} alt="음식" />
            ))}
          </style.FoodImage>
          <style.ChooseBox>
            <div onClick={onClickLike}>{foodData?.likeText}</div>
            <div onClick={onClickHate}>{foodData?.hateText}</div>
          </style.ChooseBox>
        </style.FoodContainer>
        <style.BottomContainer>
          <style.CharacterProgress percentage={percentage}>
            <Image src={selectedCharacter} alt="캐릭터" />
          </style.CharacterProgress>
          <style.Percentage>진행도 {percentage}%</style.Percentage>
          <style.ProgressBar percentage={percentage}>
            <div></div>
          </style.ProgressBar>
        </style.BottomContainer>
      </style.Container>
    </>
  );
}
