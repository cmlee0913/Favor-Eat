import * as style from "./RecipeFlavorLayout.style";

import Spicy from "@/assets/image/Character/Spicy.png";
import Sweet from "@/assets/image/Character/Sweet.png";
import Salty from "@/assets/image/Character/Salty.png";
import Oily from "@/assets/image/Character/Oily.png";
import { FlavorCharacter, RecipeFlavorProps } from "@/types/RecipeFlavor/dummy";
import Image, { StaticImageData } from "next/image";
import FlavorCharacterCompo from "@/present/component/FlavorCharacterCompo/FlavorCharacterCompo";
import FlavorProgressCompo from "@/present/common/FlavorProgress/FlavorProgressCompo";

import SpicyHoverBoxPC from "@/assets/image/SpicyHoverBoxPC.png";
import SweetHoverBoxPC from "@/assets/image/SweetHoverBoxPC.png";
import SaltyHoverBoxPC from "@/assets/image/SaltyHoverBoxPC.png";
import { useState } from "react";

export default function RecipeFlavorLayout({
  values,
  recipeImage,
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

  const flavorList: Array<FlavorCharacter> = [];
  values.forEach((item) => {
    const obj: any = {
      ...flavorStaticData[item.type],
      value: item.value,
      type: item.type,
    };
    flavorList.push(obj);
  });

  const onActive = (type: string) => {
    let img;
    switch (type) {
      case "spicy":
        img = SpicyHoverBoxPC;
        break;
      case "sweet":
        img = SweetHoverBoxPC;
        break;
      case "salty":
        img = SaltyHoverBoxPC;
        break;
      case "oily":
        img = SaltyHoverBoxPC;
        break;
    }
    setInfoImg(img);
    setInfoShow(true);
  };

  const onInactive = () => {
    setInfoShow(false);
  };

  const [infoImg, setInfoImg] = useState<StaticImageData>();
  const [infoShow, setInfoShow] = useState(false);

  return (
    <style.Container>
      <style.ImgForMobile>
        <Image src={recipeImage} alt="" />
      </style.ImgForMobile>
      <style.PCHover show={infoShow}>
        <Image src={infoImg} alt="" width={200} height={500} />
      </style.PCHover>
      <style.CharacterContainer>
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
        {values.map((item, index) => (
          <FlavorProgressCompo
            key={index}
            type={item.type}
            value={item.value}
          />
        ))}
      </style.ProgressContainer>
    </style.Container>
  );
}
