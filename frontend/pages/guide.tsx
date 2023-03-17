import React, { useState, useEffect } from "react";
import { GlobalStyle } from "@/action/GlobalStyle";
import Image from "next/image";

import EndLayout from "@/present/layout/guide/EndLayout";
import FunctionLayout from "@/present/layout/guide/FunctionLayout";
import StartLayout from "@/present/layout/guide/StartLayout";
import SuggestLayout from "@/present/layout/guide/SuggestLayout";
import { useScroll } from "@/action/hooks/useScroll";

import { Character } from "@/present/layout/guide/Guide.style";

import GuideCharacter from "@/assets/image/Guide.png";

export default function Guide() {
  const [scrollY, viewHeight] = useScroll();
  const [picPos, setPicPos] = useState<number>(0);

  useEffect(() => {
    console.log(scrollY);
    const tmp = scrollY - viewHeight;
    if (tmp > 0) setPicPos(tmp);
  }, [scrollY]);

  //새로고침 할 때마다 초점이 내려가는 현상 막기
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <GlobalStyle />

      <Character>
        <Image src={GuideCharacter} alt="Characters" />
      </Character>

      {/* 분기별 화면 */}
      <StartLayout />
      <SuggestLayout picPos={picPos} />
      <FunctionLayout />
      <FunctionLayout />
      <SuggestLayout picPos={picPos} />
      <EndLayout />
    </>
  );
}
