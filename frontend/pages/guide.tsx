import React, { useState, useEffect } from "react";
import { GlobalStyle } from "@/constant/GlobalStyle";
import { useScroll } from "@/action/hooks/useScroll";
import Image from "next/image";

import EndLayout from "@/present/layout/Guide/EndLayout";
import FunctionLayout from "@/present/layout/Guide/FunctionLayout";
import StartLayout from "@/present/layout/Guide/StartLayout";
import SuggestLayout from "@/present/layout/Guide/SuggestLayout";

import { Character } from "@/present/layout/Guide/Guide.style";
import { PageContainer } from "@/present/layout/pageStyle";
import GuideCharacter from "@/assets/image/Guide.png";

export default function Guide() {
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
      <SuggestLayout />
      <FunctionLayout />
      <EndLayout />
    </PageContainer>
  );
}
