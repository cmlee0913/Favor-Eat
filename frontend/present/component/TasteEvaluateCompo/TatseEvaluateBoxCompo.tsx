import { theme } from "@/action/theme";
import FlavorCharacterCompo from "../FlavorCharacterCompo/FlavorCharacterCompo";
import TasteRatingCompo from "../TasteRatingCompo/TasteRatingCompo";
import * as style from "./TatseEvaluateBoxCompo.style";

import SpicyHoverBoxPC from "@/assets/image/SpicyHoverBoxPC.png";
import SweetHoverBoxPC from "@/assets/image/SweetHoverBoxPC.png";
import SaltyHoverBoxPC from "@/assets/image/SaltyHoverBoxPC.png";

import SpicyHoverBoxMobile from "@/assets/image/SpicyHoverBoxMobile.png";
import SweetHoverBoxMobile from "@/assets/image/SweetHoverBoxMobile.png";
import SaltyHoverBoxMobile from "@/assets/image/SaltyHoverBoxMobile.png";
import { useState } from "react";
import { HoverBoxImageType } from "@/types/RecipeFlavor/dummy";
import { FlavorObject } from "@/types/Taste/dummy";

export default function TasteEvaluateBoxCompo() {
  const hoverBoxValue = {
    spicy: {
      pcImage: SpicyHoverBoxPC,
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

  const onActive = (type: string) => {
    setHoverBoxImage(hoverBoxValue[type]);
    setInfoShow(false);
    setInfoShow(true);
  };

  const onInactive = () => {
    setInfoShow(false);
  };

  const [hoverBoxImage, setHoverBoxImage] = useState<HoverBoxImageType>(
    hoverBoxValue.spicy,
  );
  const [infoShow, setInfoShow] = useState(false);
  const [ratingValues, setRatingValues] = useState<Array<number>>(
    Array(4).fill(0),
  );

  const setRatingValue = (value: number, type: string) => {
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
    console.log(ratingValues);
  };

  const ratingObjList: Array<Array<FlavorObject>> = [
    [
      {
        type: "spicy",
        typeToString: "맵기",
      },
      {
        type: "sweet",
        typeToString: "달기",
      },
    ],
    [
      {
        type: "salty",
        typeToString: "짜기",
      },
      {
        type: "oily",
        typeToString: "기름기",
      },
    ],
  ];

  return (
    <style.Container>
      <style.Header>
        <div>맛 평가하기</div>
      </style.Header>
      <style.Body>
        <div></div>
        <div className="row">
          {ratingObjList[0].map((item, index) => {
            return (
              <style.FlavorWrapper key={item.typeToString}>
                <FlavorCharacterCompo
                  type={item.type}
                  title={""}
                  value={ratingValues[index]}
                  img={theme.characterImg[item.type]}
                  hoverActive={onActive}
                  hoverInactive={onInactive}
                />
                <style.RatingWrapper>
                  <style.ValueText type={item.type}>
                    이 음식의 {item.typeToString}는&nbsp;
                    <span>{ratingValues[index]}</span>
                    &nbsp;입니다
                  </style.ValueText>
                  <TasteRatingCompo
                    type={item.type}
                    setRatingValue={setRatingValue}
                  />
                </style.RatingWrapper>
              </style.FlavorWrapper>
            );
          })}
        </div>
        <div></div>
        <div className="row">
          {ratingObjList[1].map((item, index) => {
            return (
              <style.FlavorWrapper key={item.typeToString}>
                <FlavorCharacterCompo
                  type={item.type}
                  title={""}
                  value={ratingValues[index + 2]}
                  img={theme.characterImg[item.type]}
                  hoverActive={onActive}
                  hoverInactive={onInactive}
                />
                <style.RatingWrapper>
                  <style.ValueText type={item.type}>
                    이 음식의 {item.typeToString}는&nbsp;
                    <span>{ratingValues[index + 2]}</span>
                    &nbsp;입니다
                  </style.ValueText>
                  <TasteRatingCompo
                    type={item.type}
                    setRatingValue={setRatingValue}
                  />
                </style.RatingWrapper>
              </style.FlavorWrapper>
            );
          })}
        </div>
      </style.Body>
    </style.Container>
  );
}
