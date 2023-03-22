import * as style from "./RecipeFlavorLayout.style";

import Spicy from "@/assets/image/Character/Spicy.png";
import Sweet from "@/assets/image/Character/Sweet.png";
import Salty from "@/assets/image/Character/Salty.png";
import Oily from "@/assets/image/Character/Oily.png";
import { FlavorCharacter, RecipeFlavorProps } from "@/types/RecipeFlavor/dummy";
import Image from "next/image";
import FlavorCharacterCompo from "@/present/component/FlavorCharacterCompo/FlavorCharacterCompo";
import FlavorProgressCompo from "@/present/common/FlavorProgress/FlavorProgressCompo";

export default function RecipeFlavorLayout({
  values,
  recipeImage,
}: RecipeFlavorProps) {
  const flavorStaticData = {
    spicy: { title: "매워요", img: Spicy },
    sweet: { title: "달아요", img: Sweet },
    salty: { title: "짜요", img: Salty },
    oily: { title: "기름져요", img: Oily },
  };

  const flavorList: Array<FlavorCharacter> = [];
  values.forEach((item) => {
    const obj: FlavorCharacter = {
      ...flavorStaticData[item.type],
      value: item.value,
    };
    flavorList.push(obj);
  });

  return (
    <style.Container>
      <style.ImgForMobile>
        <Image src={recipeImage} alt="" />
      </style.ImgForMobile>
      <style.CharacterContainer>
        {flavorList.map((item, index) => (
          <FlavorCharacterCompo
            key={index}
            title={item.title}
            img={item.img}
            value={Math.floor(item.value)}
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
