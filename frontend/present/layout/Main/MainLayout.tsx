import FilpImageCardCompo from "@/present/component/FlipImageCardCompo/FlipImageCardCompo";
import Image from "next/image";
import * as style from "./MainLayout.style";
import CharactersImage from "@/assets/image/Character/MainPage.png";
import { useState } from "react";

export default function MainLayout({ foods }) {
  const [isMainMode, setIsMainMode] = useState<boolean>(true);

  return (
    <style.Container>
      <style.Foods>
        {foods.map((food, index) => (
          <FilpImageCardCompo className="item" key={index} {...food} />
        ))}
      </style.Foods>
      <style.Right>
        <style.Slogan>
          Life is short,
          <br /> Eat this first.
        </style.Slogan>
        <Image
          src={CharactersImage}
          width={400}
          alt="characters search for food"
        ></Image>
        <style.RecommendIcons>
          <style.MainRecommendActive />
          <style.AnotherRecommendInactive />
        </style.RecommendIcons>
      </style.Right>
    </style.Container>
  );
}
