import React, { useState } from "react";

import Background from "@/present/layout/taste/Background";
import Character from "@/present/layout/taste/Character";
import Introduction from "@/present/layout/taste/Introduction";
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
