import React, { useEffect } from "react";
import { GlobalStyle } from "@/action/GlobalStyle";
import Image from "next/image";

import EndLayout from "@/present/layout/guide/EndLayout";
import FunctionLayout from "@/present/layout/guide/FunctionLayout";
import StartLayout from "@/present/layout/guide/StartLayout";
import SuggestLayout from "@/present/layout/guide/SuggestLayout";
import SocialLoginBtnCompo from "@/present/component/SocialLoginBtnCompo/SocialLoginBtnCompo";

import { Character } from "@/present/layout/guide/Guide.style";

import GuideCharacter from "@/assets/image/Guide.png";

export default function Guide() {

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
      <SuggestLayout />
      <FunctionLayout />
      <EndLayout />
      <div>
      {/* {socialLoginBtnList.map((item) => (
        <SocialLoginBtnCompo
          key={item.type}
          type={item.type}
          title={item.title}
        />
      ))} */}
    </div>
    </>
  );
}
