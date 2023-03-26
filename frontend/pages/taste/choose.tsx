import React, { useState } from "react";

import Background from "@/present/layout/taste/choose/Background";
import Character from "@/present/layout/taste/choose/Character";
import Introduction from "@/present/layout/taste/choose/Introduction";
import { useRouter } from "next/router";

export default function Taste() {
  const router = useRouter();
  const [selectedCharacter, setSelectedCharacter] = useState<string>();

  const movePage = (character: string) => {
    router?.replace({
      pathname: "/taste/analysis",
      query: {
        character: character,
      },
    });
  };

  return (
    <>
      <Introduction />
      <Background movePage={movePage} selectedChracter={selectedCharacter} />
      <Character changeCharacter={setSelectedCharacter} />
    </>
  );
}
