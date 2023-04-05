import Background from "@/present/layout/Taste/Choose/Background";
import Character from "@/present/layout/Taste/Choose/Character";
import { useRouter } from "next/router";
import { useState } from "react";
import * as style from "@/present/layout/Taste/Choose/Taste.style";

export default function Choose() {
  const router = useRouter();
  const [selectedCharacter, setSelectedCharacter] = useState<string>("sweet");

  const movePage = (character: string) => {
    router?.push({
      pathname: "/share/test",
      query: {
        character: character,
      },
    });
  };

  return (
    <>
      <style.Introduction>
        <div>나는 으른 입맛일까?</div>
        <div>당신의 입맛을 테스트 해보세요</div>
      </style.Introduction>
      <Background />
      <Character changeCharacter={setSelectedCharacter} />
      <style.ChooseButton onClick={() => movePage(selectedCharacter)}>
        내 입맛 연령 알아보기
      </style.ChooseButton>
    </>
  );
}
