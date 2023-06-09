import { theme } from "@/constant/theme";
import FlavorCharacterCompo from "../FlavorCharacterCompo/FlavorCharacterCompo";
import TasteRatingCompo from "../TasteRatingCompo/TasteRatingCompo";
import * as style from "./TatseEvaluateBoxCompo.style";

import SpicyHoverBoxPc from "@/assets/image/HoverInfo/SpicyHoverBoxPCSmall.png";
import SweetHoverBoxPC from "@/assets/image/HoverInfo/SweetHoverBoxPCSmall.png";
import SaltyHoverBoxPC from "@/assets/image/HoverInfo/SaltyHoverBoxPCSmall.png";

import SpicyHoverBoxMobile from "@/assets/image/HoverInfo/SpicyTasteHoverBoxMobile.png";
import SweetHoverBoxMobile from "@/assets/image/HoverInfo/SweetTasteHoverBoxMobile.png";
import SaltyHoverBoxMobile from "@/assets/image/HoverInfo/SaltyTasteHoverBoxMobile.png";

import defaultImage from "@/assets/image/default-image.png";
import NextIcon from "@/assets/icon/Next.svg";

import { useEffect, useState } from "react";
import { FlavorType, HoverBoxImageType } from "@/types/RecipeFlavor/dummy";
import { FlavorObject } from "@/types/Taste/dummy";
import Image from "next/image";
import useMediaQuery from "@/action/hooks/useMediaQuery";
import Button from "@/present/common/Button/Button";
import { useRouter } from "next/router";
import { TasteEvaluateBoxCompoProps } from "@/types/TasteEvaluateBoxCompo/dummy";
import { currentIndexAtom, recipeRatingListAtom } from "@/store/tasteStore";
import { useAtom, useSetAtom } from "jotai";
import { RecipeRatingType } from "@/types/store/tasteStoreTypes";
import { sendFirstRecipeTasteValue } from "@/action/apis/taste";
import { userTokenSave } from "@/store/userStore";
import { hoverTypeAtom, isHoverAtom } from "@/store/hoverStore";
import HoverInfoCompo from "../HoverInfoCompo/HoverInfoCompo";

const hoverBoxValue = {
  spicy: {
    pcImage: SpicyHoverBoxPc,
    mobileImage: SpicyHoverBoxMobile,
    left: 7,
  },
  sweet: {
    pcImage: SweetHoverBoxPC,
    mobileImage: SweetHoverBoxMobile,
    left: 20,
  },
  salty: {
    pcImage: SaltyHoverBoxPC,
    mobileImage: SaltyHoverBoxMobile,
    left: 30,
  },
  oily: {
    pcImage: SaltyHoverBoxPC,
    mobileImage: SaltyHoverBoxMobile,
    left: 30,
  },
};

//rendering object
const ratingObjList: Array<Array<FlavorObject>> = [
  [
    {
      type: "spicy",
      typeToString: "맵기",
      characterTitle: "매워요",
    },
    {
      type: "sweet",
      typeToString: "달기",
      characterTitle: "달아요",
    },
  ],
  [
    {
      type: "salty",
      typeToString: "짜기",
      characterTitle: "짜요",
    },
    {
      type: "oily",
      typeToString: "기름기",
      characterTitle: "기름져요",
    },
  ],
];

export default function TasteEvaluateBoxCompo({
  canGoMain,
  recipeData,
  buttonActive,
}: TasteEvaluateBoxCompoProps) {
  const isTablet = useMediaQuery("(min-width: 1000px)");
  const isMobile = useMediaQuery("(min-width: 426px)");
  const { recipeId, recipeName, imageSrc } = recipeData;
  const router = useRouter();

  //hover info box
  const setHoverType = useSetAtom(hoverTypeAtom);
  const [isHover, setIsHover] = useAtom(isHoverAtom);
  const [rightInfoShow, setRightInfoShow] = useState(false);

  const onActive = (type: FlavorType, isLeft: boolean) => {
    setHoverType(type);
    setIsHover(true);

    if (isLeft) {
      //화면 깜빡임 방지
      setRightInfoShow(false);
      return;
    }
    setRightInfoShow(true);
  };
  const onInactive = () => {
    setIsHover(false);
    setRightInfoShow(false);
  };

  //각 맛 별 점수
  const [ratingValues, setRatingValues] = useState<Array<number>>(
    Array(4).fill(0),
  );
  const setRatingValue = (value: number, type: string) => {
    //이미지 평가 완료 버튼 활성화
    let index = 0;

    switch (type) {
      case "sweet":
        index = 1;
        break;
      case "salty":
        index = 2;
        break;
      case "oily":
        index = 3;
        break;
    }
    const valueList = [...ratingValues];
    valueList[index] = value;
    setRatingValues(valueList);

    let isNotZero = true;
    valueList.forEach((value) => {
      if (value === 0) isNotZero = false;
    });
    setCanMoveToNext(isNotZero);
  };

  const [currentIndex, setCurrentIndex] = useAtom(currentIndexAtom);
  const [recipeRatingList, setRecipeRatingList] = useAtom(recipeRatingListAtom);
  const [canMoveToNext, setCanMoveToNext] = useState(false);
  const [token, setUserToken] = useAtom(userTokenSave);

  const onClickNext = () => {
    buttonActive(true);
    const newRatingValue: RecipeRatingType = {
      recipeId: recipeData.recipeId,
      ratingValueList: [],
    };
    newRatingValue.ratingValueList.push({
      type: "spicy",
      value: ratingValues[0],
    });
    newRatingValue.ratingValueList.push({
      type: "sweet",
      value: ratingValues[1],
    });
    newRatingValue.ratingValueList.push({
      type: "salty",
      value: ratingValues[2],
    });
    newRatingValue.ratingValueList.push({
      type: "oily",
      value: ratingValues[3],
    });

    const oldRatingList = [...recipeRatingList];
    oldRatingList.push(newRatingValue);
    setRecipeRatingList(oldRatingList);
    setCurrentIndex(currentIndex + 1);
  };

  const onClickStop = async () => {
    const { isSuccess, result } = await sendFirstRecipeTasteValue(
      recipeRatingList,
      token.accessToken,
    );

    if (isSuccess) {
      router.push("/main");
    }
  };

  useEffect(() => {
    setCanMoveToNext(false);
    setRatingValues([0, 0, 0, 0]);
  }, [recipeId]);

  return (
    <>
      {!(isTablet && isMobile) ? (
        // mobile
        <style.MobileContainer>
          <style.Header>
            <div>맛 평가하기</div>
            {canMoveToNext ? (
              <style.NextButton onClick={onClickNext}>
                <NextIcon />
              </style.NextButton>
            ) : null}
          </style.Header>
          {/* body */}
          <style.ChracterContainer>
            <style.ImageContainer>
              <div>{recipeName}</div>
              {isHover && !rightInfoShow ? (
                <div>
                  <HoverInfoCompo />
                </div>
              ) : (
                <Image
                  src={imageSrc ? imageSrc : defaultImage}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  alt="음식 사진"
                />
              )}
            </style.ImageContainer>
            <div className="characters">
              {[...ratingObjList[0], ...ratingObjList[1]].map((item, index) => {
                return (
                  <style.Character key={index}>
                    <div className="character">
                      <div className="title">{item.characterTitle}</div>
                      <Image
                        src={theme.characterImg[item.type]}
                        width={100}
                        height={100}
                        alt="맛 캐릭터"
                      />
                      <div className="value">
                        <div
                          className="hover"
                          onMouseOver={() => {
                            setHoverType(item.type);
                            setIsHover(true);
                          }}
                          onMouseOut={() => setIsHover(false)}
                        >
                          <div>?</div>
                        </div>
                        <span>{ratingValues[index]}</span>단계
                      </div>
                    </div>
                  </style.Character>
                );
              })}
            </div>
          </style.ChracterContainer>
          <style.RatingContainer>
            {[...ratingObjList[0], ...ratingObjList[1]].map((item, index) => (
              <style.RatingWrapper key={index}>
                <style.ValueText type={item.type}>
                  이 음식의 {item.typeToString}는&nbsp;
                  <span>{ratingValues[index]}</span>
                  &nbsp;입니다
                </style.ValueText>
                <div className="rating"></div>
                <TasteRatingCompo
                  ratingValue={0}
                  type={item.type}
                  setRatingValue={setRatingValue}
                  recipeId={recipeId}
                />
              </style.RatingWrapper>
            ))}
            {canGoMain ? (
              <style.Button>
                <Button context="맛 평가 종료하기" handler={onClickStop} />
              </style.Button>
            ) : null}
          </style.RatingContainer>
        </style.MobileContainer>
      ) : (
        // pc
        <style.PcContainer>
          <style.Header>
            <div>맛 평가하기</div>
            {/* 버튼 */}
            {canMoveToNext ? (
              <style.NextButton onClick={onClickNext}>
                <NextIcon />
              </style.NextButton>
            ) : null}
          </style.Header>
          <style.PcBody>
            <style.InfoBox>
              {isHover && !rightInfoShow ? <HoverInfoCompo /> : null}
            </style.InfoBox>
            <div className="row">
              {ratingObjList[0].map((item, index) => {
                return (
                  <style.FlavorWrapper key={item.typeToString}>
                    <div>
                      <div className="characterTitle">
                        {item.characterTitle}
                      </div>
                      <FlavorCharacterCompo
                        type={item.type}
                        title={""}
                        value={Math.floor(ratingValues[index])}
                        img={theme.characterImg[item.type]}
                        hoverActive={() => onActive(item.type, true)}
                        hoverInactive={onInactive}
                      />
                    </div>
                    <style.RatingWrapper>
                      <style.ValueText type={item.type}>
                        이 음식의 {item.typeToString}는&nbsp;
                        <span>{ratingValues[index]}</span>
                        &nbsp;입니다
                      </style.ValueText>
                      <TasteRatingCompo
                        ratingValue={0}
                        recipeId={recipeId}
                        type={item.type}
                        setRatingValue={setRatingValue}
                      />
                    </style.RatingWrapper>
                  </style.FlavorWrapper>
                );
              })}
            </div>
            <style.InfoBox>
              {isHover && rightInfoShow ? <HoverInfoCompo /> : null}
            </style.InfoBox>
            <div className="row">
              {ratingObjList[1].map((item, index) => {
                return (
                  <style.FlavorWrapper key={item.typeToString}>
                    <div>
                      <div className="characterTitle">
                        {item.characterTitle}
                      </div>
                      <FlavorCharacterCompo
                        type={item.type}
                        title={""}
                        value={Math.floor(ratingValues[index + 2])}
                        img={theme.characterImg[item.type]}
                        hoverActive={() => onActive(item.type, false)}
                        hoverInactive={onInactive}
                      />
                    </div>
                    <style.RatingWrapper>
                      <style.ValueText type={item.type}>
                        이 음식의 {item.typeToString}는&nbsp;
                        <span>{ratingValues[index + 2]}</span>
                        &nbsp;입니다
                      </style.ValueText>
                      <TasteRatingCompo
                        ratingValue={0}
                        type={item.type}
                        setRatingValue={setRatingValue}
                        recipeId={recipeId}
                      />
                    </style.RatingWrapper>
                  </style.FlavorWrapper>
                );
              })}
            </div>
          </style.PcBody>
        </style.PcContainer>
      )}
    </>
  );
}
