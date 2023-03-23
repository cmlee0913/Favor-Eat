import * as style from "./Taste.style";

import Image from "next/image";

import Spicy from "@/assets/image/Character/Spicy.png";
import Sweet from "@/assets/image/Character/Sweet.png";
import Salty from "@/assets/image/Character/Salty.png";
import { useState } from "react";

export default function Character({ changeCharacter }) {
  const characterList = [
    { img: Spicy, name: "매콤이", type: "spicy" },
    { img: Sweet, name: "달달이", type: "sweet" },
    { img: Salty, name: "짭짤이", type: "salty" },
  ];

  const [selectedList, setSelectedList] = useState([false, true, false]);

  const onClickCharacter = (index: number) => {
    const values = [false, false, false];
    values[index] = true;
    setSelectedList(values);
    changeCharacter(characterList[index].type);
  };

  return (
    <>
      <style.CharacterContainer>
        {characterList.map((item, index) => (
          <style.Character
            key={index}
            className={selectedList[index] ? "selected" : ""}
          >
            <Image
              src={item.img}
              alt={item.type}
              onClick={() => onClickCharacter(index)}
            />
            <div>{item.name}</div>
          </style.Character>
        ))}
      </style.CharacterContainer>
    </>
  );
}
