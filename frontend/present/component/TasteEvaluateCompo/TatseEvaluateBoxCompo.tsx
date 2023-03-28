import { theme } from "@/action/theme";
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
import { HoverBoxImageType } from "@/types/RecipeFlavor/dummy";
import { FlavorObject } from "@/types/Taste/dummy";
import Image from "next/image";
import useMediaQuery from "@/action/hooks/useMediaQuery";
import Button from "@/present/common/Button/Button";
import { useRouter } from "next/router";
import { TasteEvaluateBoxCompoProps } from "@/types/TasteEvaluateBoxCompo/dummy";

export default function TasteEvaluateBoxCompo({
  canGoMain,
  recipeId,
  recipeName,
  resetButtonShow,
  imgSrc,
}: TasteEvaluateBoxCompoProps) {
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
  // const isTablet = useMediaQuery(`(${theme.devices.tablet})`);
  // const isMobile = useMediaQuery(`(${theme.devices.mobile})`);
  const isTablet = useMediaQuery("(min-width: 769px)");
  const isMobile = useMediaQuery("(min-width: 426px)");

  //hover box 활성화
  const onActive = (type: string, isLeft: boolean) => {
    setHoverBoxImage(hoverBoxValue[type]);

    if (isLeft) {
      //화면 깜빡임 방지
      setLeftInfoShow(false);
      setLeftInfoShow(true);
      return;
    }
    setRightInfoShow(false);
    setRightInfoShow(true);
  };

  // 비활성화
  const onInactive = () => {
    setLeftInfoShow(false);
    setRightInfoShow(false);
  };

  //hover info box
  const [hoverBoxImage, setHoverBoxImage] = useState<HoverBoxImageType>(
    hoverBoxValue.spicy,
  );
  const [leftInfoShow, setLeftInfoShow] = useState(false);
  const [rightInfoShow, setRightInfoShow] = useState(false);

  //각 맛 별 점수
  const [ratingValues, setRatingValues] = useState<Array<number>>(
    Array(4).fill(0),
  );
  const setRatingValue = (value: number, type: string) => {
    //이미지 평가 완료 버튼 활성화
    setCanMoveToNext(true);

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

  const [canMoveToNext, setCanMoveToNext] = useState(false);
  const onClickNext = () => {
    setRatingValues([0, 0, 0, 0]);
    resetButtonShow();
  };

  useEffect(() => {
    setCanMoveToNext(false);
  }, [recipeId]);

  const router = useRouter();

  const onClickStop = () => {
    router.push("/main");
  };

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
              {leftInfoShow ? (
                <Image
                  className="hoverInfo"
                  src={hoverBoxImage.mobileImage}
                  width={1000}
                  height={1000}
                  alt="맛 레벨 정보"
                />
              ) : (
                <Image
                  src={imgSrc ? imgSrc : defaultImage}
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
                            setHoverBoxImage(hoverBoxValue[item.type]);
                            setLeftInfoShow(true);
                          }}
                          onMouseOut={() => setLeftInfoShow(false)}
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
              {leftInfoShow ? (
                <Image src={hoverBoxImage.pcImage} alt="맛 레벨 기준" />
              ) : null}
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
              {rightInfoShow ? (
                <Image src={hoverBoxImage.pcImage} alt="맛 레벨 기준" />
              ) : null}
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
