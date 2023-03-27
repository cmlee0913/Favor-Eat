import React, { useState } from "react";

import Background from "@/present/layout/Taste/Choose/Background";
import Character from "@/present/layout/Taste/Choose/Character";
import Introduction from "@/present/layout/Taste/Choose/Introduction";
import { useRouter } from "next/router";

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

  return (
    <>
      <Introduction />
      <Background movePage={movePage} selectedChracter={selectedCharacter} />
      <Character changeCharacter={setSelectedCharacter} />
    </>
  );
}
