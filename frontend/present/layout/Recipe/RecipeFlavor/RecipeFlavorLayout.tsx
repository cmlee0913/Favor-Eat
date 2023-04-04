import * as style from "./RecipeFlavorLayout.style";

import Spicy from "@/assets/image/Character/Spicy.png";
import Sweet from "@/assets/image/Character/Sweet.png";
import Salty from "@/assets/image/Character/Salty.png";
import Oily from "@/assets/image/Character/Oily.png";
import { FlavorCharacter, RecipeFlavorProps } from "@/types/RecipeFlavor/dummy";
import Image from "next/image";
import FlavorCharacterCompo from "@/present/component/FlavorCharacterCompo/FlavorCharacterCompo";
import FlavorProgressCompo from "@/present/common/FlavorProgress/FlavorProgressCompo";
import useModal from "@/action/hooks/useModal";
import { useAtom, useSetAtom } from "jotai";
import { modalContentAtom } from "@/store/modalStore";
import RecipeEvaluateContentCompo from "@/present/component/RecipeEvaluateContentCompo/RecipeEvaluateContentCompo";
import HoverInfoCompo from "@/present/component/HoverInfoCompo/HoverInfoCompo";
import { hoverTypeAtom, isHoverAtom } from "@/store/hoverStore";
import { FlavorType } from "@/types/MyPage/dummy";
import defaultImage from "@/assets/image/default-image.png";

export default function RecipeFlavorLayout({
  recipeImage,
  tasteInfo,
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

  const [isHover, setIsHover] = useAtom(isHoverAtom);
  const [hoverType, setHoverType] = useAtom(hoverTypeAtom);
  const leftValue = {
    spicy: 5,
    sweet: 25,
    salty: 50,
    oily: 70,
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

  const onActive = (type: FlavorType) => {
    setHoverType(type);
    setIsHover(true);
  };

  const onInactive = () => {
    setIsHover(false);
  };

  const { openModal } = useModal();
  const [, setModalContext] = useAtom(modalContentAtom);
  const onClickCharacter = () => {
    setModalContext(<RecipeEvaluateContentCompo />);
    openModal();
  };

  return (
    <style.Container>
      <style.ImgForMobile>
        <Image
          src={recipeImage ? recipeImage : defaultImage}
          alt=""
          width={1000}
          height={1000}
        />
      </style.ImgForMobile>
      <style.PCHover>
        {isHover ? (
          <div>
            <HoverInfoCompo />
          </div>
        ) : null}
      </style.PCHover>
      <style.CharacterContainer>
        {flavorList.map((item, index) => (
          <FlavorCharacterCompo
            onClick={onClickCharacter}
            key={index}
            {...item}
            value={Math.floor(item.value)}
            hoverActive={onActive}
            hoverInactive={onInactive}
          />
        ))}
        <style.MobileHover left={leftValue[hoverType]}>
          {isHover ? <HoverInfoCompo isColumn={false} /> : null}
        </style.MobileHover>
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
