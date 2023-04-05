import React, { useState } from "react";

import Background from "@/present/layout/Taste/Choose/Background";
import Character from "@/present/layout/Taste/Choose/Character";
import Introduction from "@/present/layout/Taste/Choose/Introduction";
import { useRouter } from "next/router";
import * as style from "@/present/layout/Taste/Choose/Taste.style";

export default function Taste() {
  const router = useRouter();
  const [selectedCharacter, setSelectedCharacter] = useState<string>("sweet");

  const movePage = (character: string) => {
    router?.replace({
      pathname: "/taste/analysis",
      query: {
        character: character,
      },
    });
  };

  const onClickButton = () => {
    movePage(selectedCharacter);
  };

  return (
    <>
      <Introduction />
      <Background />
      <Character changeCharacter={setSelectedCharacter} />
      <style.ChooseButton onClick={onClickButton}>
        모험 떠나기
      </style.ChooseButton>
    </>
  );
}
