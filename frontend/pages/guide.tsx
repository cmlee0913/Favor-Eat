import React, { useState, useEffect } from "react";
import { GlobalStyle } from "@/action/GlobalStyle";
import { useScroll } from "@/action/hooks/useScroll";
import Image from "next/image";

import EndLayout from "@/present/layout/Guide/EndLayout";
import FunctionLayout from "@/present/layout/Guide/FunctionLayout";
import StartLayout from "@/present/layout/Guide/StartLayout";
import SuggestLayout from "@/present/layout/Guide/SuggestLayout";

import { Character } from "@/present/layout/Guide/Guide.style";
import { PageContainer } from "@/present/layout/Guide/pageStyle";
import GuideCharacter from "@/assets/image/Guide.png";

export default function Guide() {
  const [scrollY, viewHeight, eventHeight] = useScroll();
  // const [picPos, setPicPos] = useState<number>(0);

  //여기서 렌더링이 많이 발생할 듯?
  // useEffect(() => {
  //   const tmp = scrollY - viewHeight;
  //   if (tmp > 0) setPicPos(tmp);
  // }, [scrollY]);

  //새로고침 할 때마다 초점이 내려가는 현상 막기
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <PageContainer>
      <GlobalStyle />

      <Character>
        <Image src={GuideCharacter} alt="Characters" />
      </Character>

      {/* 분기별 화면 */}
      <StartLayout />
      <SuggestLayout picPos={eventHeight} viewHeight={viewHeight} />
      <FunctionLayout />
      <SuggestLayout picPos={eventHeight} viewHeight={viewHeight} />
      <FunctionLayout />
      <SuggestLayout picPos={eventHeight} viewHeight={viewHeight} />
      <FunctionLayout />
      <EndLayout />
    </PageContainer>
  );
}
