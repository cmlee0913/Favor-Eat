import * as style from "./RecipeEvaluateContentCompo.style";
import characterData from "@/constant/characterData";
import TasteEvaluateBoxCompo from "../TasteEvaluateCompo/TatseEvaluateBoxCompo";
import { MouseEvent, SetStateAction, useEffect, useState } from "react";
import TasteRatingCompo from "../TasteRatingCompo/TasteRatingCompo";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "@/present/common/Button/Button";
import { useAtomValue, useSetAtom } from "jotai";
import { modalIsShowAtom } from "@/store/modalStore";
import useModal from "@/action/hooks/useModal";
import { FlavorRatingObject } from "@/types/Recipe/dummy";
import { getMyRecipeRating, saveMyRecipeRating } from "@/action/apis/recipe";
import { userTokenSave } from "@/store/userStore";

export default function RecipeEvaluateContentCompo() {
  const router = useRouter();
  const { pid } = router.query;
  const recipeId = parseInt(pid as string, 10);

  const [ratingValue, setRatingValue] = useState<FlavorRatingObject>({
    spicy: 0,
    sweet: 0,
    salty: 0,
    oily: 0,
  });
  const setFlavorEvaluate = (value: number, type: string) => {
    const obj = { ...ratingValue };
    obj[type] = value;
    setRatingValue(obj);
  };
  const token = useAtomValue(userTokenSave);

  //recipeid가 바뀔때마다 평가 정보 받아옴
  useEffect(() => {
    if (!token.accessToken) return;

    getMyRecipeRating(token.accessToken, recipeId).then((response) => {
      const { isSuccess, result } = response;
      if (isSuccess && result) {
        setRatingValue(result);
      }
    });
  }, [pid]);

  //모두 평가했는지
  const [allClicked, setAllClicked] = useState(false);
  //맛 평가 점수가 모두 1점 이상일때만 평가 완료 가능
  useEffect(() => {
    let value = true;
    Object.keys(ratingValue).forEach((type) => {
      if (ratingValue[type] === 0) {
        value = false;
      }
    });
    if (value) {
      setAllClicked(true);
    }
  }, [ratingValue]);

  //평가 완료
  const { closeModal } = useModal();
  const onClickEvaluate = async () => {
    saveMyRecipeRating(token.accessToken, recipeId, ratingValue);
    closeModal();
  };

  return (
    <>
      <style.Container>
        <style.Header>맛 평가하기</style.Header>
        <style.Body>
          {Object.keys(characterData).map((type) => (
            <style.CharacterContainer key={type}>
              <style.Text type={type}>
                <div>{characterData[type].subTitle}</div>
                <div>
                  이 음식의 {characterData[type].title}는
                  <span>{ratingValue[type]}</span>입니다.
                </div>
              </style.Text>
              <style.ImageWrapper>
                <div>
                  <Image src={characterData[type].image} alt="캐릭터 이미지" />
                </div>
                <TasteRatingCompo
                  ratingValue={ratingValue[type]}
                  type={type}
                  setRatingValue={setFlavorEvaluate}
                  recipeId={pid}
                />
              </style.ImageWrapper>
            </style.CharacterContainer>
          ))}
        </style.Body>
        {allClicked ? (
          <style.ButtonWrapper>
            <Button context="평가 종료하기" handler={() => onClickEvaluate()} />
          </style.ButtonWrapper>
        ) : null}
      </style.Container>
    </>
  );
}
