import React from "react";
import * as style from "./Info.style";

import AccordianPurpleCompo from "@/present/component/AccordianPurpleCompo/AccordianPurpleCompo";
import { InfoContentProps } from "@/types/Info/dummy";

import RightTitleBox from "@/present/common/TitleBox/RightTitleBox/RightTitleBox";

export default function InfoAccordian({
  infoArr,
  selectIdx,
  setSelectedIdx,
}: InfoContentProps) {
  const accordianHandler = (idx: number) => {
    setSelectedIdx(idx);
  };

  const accordians = infoArr.map((elem, idx) => {
    return (
      <AccordianPurpleCompo
        key={idx}
        elem={elem}
        idx={idx}
        accordianHandler={() => accordianHandler(idx)}
      />
    );
  });

  return (
    <style.InfoAccodian>
      <RightTitleBox title="출처" />
      {accordians}
    </style.InfoAccodian>
  );
}
