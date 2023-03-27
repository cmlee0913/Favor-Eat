import React from "react";

import AccordianCompo from "@/present/component/AccordianCompo/AccordianCompo";
import { MyPageContentProps } from "@/types/MyPage/dummy";
import * as style from "./MyPage.style";

export default function MyPageAccordian({
  myPageArr,
  selectIdx,
  setSelectedIdx,
}: MyPageContentProps) {
  const accordianHandler = (idx: number) => {
    setSelectedIdx(idx);
  };

  const accordians = myPageArr.map((elem, idx) => {
    return (
      <AccordianCompo
        key={idx}
        elem={elem}
        idx={idx}
        accordianHandler={() => accordianHandler(idx)}
      />
    );
  });

  return <style.MyPageAccordian> {accordians} </style.MyPageAccordian>;
}
