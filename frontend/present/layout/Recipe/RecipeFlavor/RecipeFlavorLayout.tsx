import * as style from "./RecipeFlavorLayout.style";

import Spicy from "@/assets/image/Character/Spicy.png";
import Sweet from "@/assets/image/Character/Sweet.png";
import Salty from "@/assets/image/Character/Salty.png";
import Oily from "@/assets/image/Character/Oily.png";
import {
  FlavorCharacter,
  HoverBoxImageType,
  RecipeFlavorProps,
} from "@/types/RecipeFlavor/dummy";
import Image from "next/image";
import FlavorCharacterCompo from "@/present/component/FlavorCharacterCompo/FlavorCharacterCompo";
import FlavorProgressCompo from "@/present/common/FlavorProgress/FlavorProgressCompo";

import SpicyHoverBoxPC from "@/assets/image/SpicyHoverBoxPC.png";
import SweetHoverBoxPC from "@/assets/image/SweetHoverBoxPC.png";
import SaltyHoverBoxPC from "@/assets/image/SaltyHoverBoxPC.png";

import SpicyHoverBoxMobile from "@/assets/image/SpicyHoverBoxMobile.png";
import SweetHoverBoxMobile from "@/assets/image/SweetHoverBoxMobile.png";
import SaltyHoverBoxMobile from "@/assets/image/SaltyHoverBoxMobile.png";
import { useState } from "react";

export default function RecipeFlavorLayout({
  recipeImage,
  tasteInfo
}: RecipeFlavorProps) {
  const flavorStaticData = {
    spicy: {
      type: "spicy",
      title: "매워요",
      img: Spicy,
    },
    sweet: {
      title: "달아요",
      img: Sweet,
    },
    salty: {
      title: "짜요",
      img: Salty,
    },
    oily: {
      title: "기름져요",
      img: Oily,
    },
  };

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

  const flavorList: Array<FlavorCharacter> = [];
  Object.keys(tasteInfo).forEach((item) => {
    const obj: any = {
      ...flavorStaticData[item],
      value: tasteInfo[item],
      type: item,
    };
    flavorList.push(obj);
  });

  const onActive = (type: string) => {
    setHoverBoxImage(hoverBoxValue[type]);
    setInfoShow(false);
    setInfoShow(true);
  };

  const onInactive = () => {
    setInfoShow(false);
  };

  const [hoverBoxImage, setHoverBoxImage] = useState<HoverBoxImageType>(
    hoverBoxValue.spicy
  );
  const [infoShow, setInfoShow] = useState(false);

  return (
    <style.Container>
      <style.ImgForMobile>
        <Image src={recipeImage} alt="" />
      </style.ImgForMobile>
      <style.PCHover show={infoShow}>
        <Image src={hoverBoxImage.pcImage} alt="" width={200} height={500} />
      </style.PCHover>
      <style.CharacterContainer>
        <style.MobileHover left={hoverBoxImage.left} show={infoShow}>
          <Image
            src={hoverBoxImage.mobileImage}
            alt=""
            width={800}
            height={800}
          />
        </style.MobileHover>
        {flavorList.map((item, index) => (
          <FlavorCharacterCompo
            key={index}
            {...item}
            value={Math.floor(item.value)}
            hoverActive={onActive}
            hoverInactive={onInactive}
          />
        ))}
      </style.CharacterContainer>

      <style.ProgressContainer>
        {Object.keys(tasteInfo).map((item, index) => (
          <FlavorProgressCompo
            key={index}
            type={item}
            value={tasteInfo[item]}
          />
        ))}
      </style.ProgressContainer>
    </style.Container>
  );
}
